import { h, Component, createRef } from "../utils/jsx.js";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faBold,
  faItalic,
  faLink,
  faListUl,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

import MarkdownContent from "./MarkdownContent";
import PrettierWorker from "./prettier.worker.js";

const worker = new PrettierWorker();

const commands = [
  { label: faBold, char: "**", shortcut: "b" },
  { label: faItalic, char: "_", shortcut: "i" },
  { label: faListUl, charAfter: "\n\n- ", selectionAfter: true },
  {
    label: faLink,
    charBefore: "[",
    charAfter: "](https://)",
    selectionAfter: true,
    selectionOffset: [2, 1],
    shortcut: "k",
  },
];

const ul_patern = /\n\s*-\s.+$/;
const ol_patern = /\n(\s*)(\d+)\.\s.+$/;
const list_end_patern = /\n\s*(-|\d+\.)\s*$/;
const ul_end_patern = /\n\s*(-|\*)\s*$/;
const ol_end_patern = /\n\s*\d\.\s*$/;

export default class EditMarkdownContent extends Component {
  state = { active: this.props.initiallyActive };
  focusPosition = this.props.focusPosition;
  textarea = createRef();

  static #prettierJobs = Promise.resolve();

  #helper = this.helper.bind(this);
  #makePrettier = this.makePrettier.bind(this);
  #markdownContentAttributes = {
    contenteditable: "true",
    className: "editable-markdown-preview",
    onBlur: this.getCaretPosition.bind(this),
    onClick: e => {
      e.stopImmediatePropagation();
      this.setState({ active: true });
    },
  };
  #actionBar = (
    <p>
      <button
        hidden
        type="button"
        onClick={() => this.textarea.current?.focus()}
      />
      {commands.map(command => (
        <button
          onClick={this.handleCommand(command)}
          accesskey={command.shortcut}
          type="button"
        >
          <FontAwesomeIcon icon={command.label} />
        </button>
      ))}
      &nbsp;|&nbsp;
      <button accesskey="s" onClick={() => this.setState({ active: false })}>
        <FontAwesomeIcon icon={faPrint} />
        &nbsp;Preview
      </button>
    </p>
  );

  static makePrettier(markdown) {
    let done;
    const waitForFulfillment = new Promise(resolve => (done = resolve));
    const job = this.#prettierJobs
      .then(
        () =>
          new Promise((resolve, reject) => {
            worker.onmessage = ({ data }) => {
              resolve(data);
            };
            worker.onmessageerror = reject;
            worker.onerror = reject;
            worker.postMessage(markdown);
          })
      )
      .finally(done);
    this.#prettierJobs = waitForFulfillment;
    return job;
  }

  getCaretPosition(e) {
    if (window.getSelection) {
      const { anchorNode, anchorOffset } = window.getSelection();
      this.focusPosition = {
        text: anchorNode.textContent,
        offset: anchorOffset,
      };
    }
  }

  handleCommand(command) {
    return e => {
      const { current } = this.textarea;

      if (!current) {
        return;
      }

      const { selectionStart, selectionEnd, value } = current;
      const charBefore = command.charBefore || command.char || "";
      const charAfter = command.charAfter || command.char || "";

      current.value =
        value.substring(0, selectionStart) +
        charBefore +
        value.substring(selectionStart, selectionEnd) +
        charAfter +
        value.substring(selectionEnd);

      if (command.selectionAfter) {
        if (command.selectionOffset) {
          const [offsetBefore, offsetAfter] = command.selectionOffset;
          current.setSelectionRange(
            selectionEnd + charBefore.length + offsetBefore,
            selectionEnd + charBefore.length + charAfter.length - offsetAfter
          );
        } else {
          current.setSelectionRange(
            selectionEnd + charAfter.length,
            selectionEnd + charAfter.length
          );
        }
      } else {
        current.setSelectionRange(
          selectionStart + charBefore.length,
          selectionEnd + charBefore.length
        );
      }

      this.props.onChange({ target: current });
      current.focus();
    };
  }

  helper(e) {
    const { value, selectionStart, selectionEnd } = e.target;

    const previousLineReturn = value.lastIndexOf("\n", selectionStart - 1);
    const nextLineReturn = value.indexOf("\n", selectionEnd - 1);
    const currentLine = value.substring(
      ~previousLineReturn ? previousLineReturn : 0,
      ~nextLineReturn ? nextLineReturn : undefined
    );

    if (e.keyCode === 13) {
      // Enter
      if (ul_patern.test(currentLine)) {
        e.preventDefault();
        e.target.setRangeText("\n- ", selectionStart, selectionEnd, "end");
      } else if (ol_patern.test(currentLine)) {
        e.preventDefault();
        const [_, spaces, index] = currentLine.match(ol_patern);
        e.target.setRangeText(
          `\n${spaces}${Number(index) + 1}. `,
          selectionStart,
          selectionEnd,
          "end"
        );
      } else if (list_end_patern.test(currentLine)) {
        e.target.setRangeText("\n", selectionStart - 3, selectionEnd, "end");
      }
    } else if (e.keyCode === 9) {
      // Tabulation
      if (list_end_patern.test(currentLine)) {
        e.preventDefault();
        e.target.setRangeText(
          "  - ",
          selectionStart - 2 - ol_end_patern.test(currentLine),
          selectionEnd,
          "end"
        );
      } else if (currentLine.trim().length === 0) {
        e.preventDefault();
        e.target.setRangeText(" > ", selectionStart, selectionEnd, "end");
      }
    }
  }

  makePrettier(e) {
    const { current } = this.textarea;

    if (current) {
      const { value } = current;

      this.constructor
        .makePrettier(value)
        .then(prettyMarkdown => {
          current.value = prettyMarkdown;
          this.props.onChange({ target: current });
        })
        .catch(console.warn);
    }
  }

  componentDidMount() {
    if (this.props.initiallyActive && this.props.initialFocus) {
      const { current } = this.textarea;
      const { text, start, end } = this.props.initialFocus;
      const posOffset = current.value.indexOf(text, start) - start;
      current.setSelectionRange(posOffset + start, posOffset + end);

      requestAnimationFrame(() => current.focus());
    }
  }

  componentDidUpdate() {
    if (this.focusPosition && this.textarea.current) {
      const { current } = this.textarea;
      const pos =
        current.value.lastIndexOf(this.focusPosition.text) +
        this.focusPosition.offset;
      current.setSelectionRange(pos, pos);

      this.focusPosition = null;
    }
  }

  render() {
    console.log("render");
    return this.state.active ? (
      <fieldset className="markdown-editor">
        <legend>Markdown editor</legend>
        {this.#actionBar}
        <p>
          <textarea
            {...this.props}
            ref={this.textarea}
            onKeyDown={this.#helper}
            onBlur={this.#makePrettier}
            rows="10"
            cols="50"
          />
        </p>
      </fieldset>
    ) : this.props.value ? (
      <MarkdownContent
        content={this.props.value}
        attributes={this.#markdownContentAttributes}
      />
    ) : (
      <p
        onClick={e => {
          e.stopImmediatePropagation();
          this.setState({ active: true });
        }}
      >
        <em style={{ fontSize: "smaller" }}>
          Empty section, click to add content.
        </em>
      </p>
    );
  }
}
