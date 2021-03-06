import { h, Component } from "preact";

import {
  clickHandler,
  dblClickHandler,
  touchHandler,
  keyboardHandler,
} from "./eventHandlers.js";
import Edit from "../edit_components/lazy-edit-component.js";
import MarkdownContent from "../markdown/MarkdownContent.js";

export default class Footer extends Component {
  state = { writeMode: false };

  #touchHandler = touchHandler.bind(this);
  #clickHandler = clickHandler.bind(this);
  #dblClickHandler = this.dblClickHandler.bind(this);
  #keyboardHandler = keyboardHandler.bind(this);

  #closeDialog = () =>
    this.setState({ writeMode: false }, () => this.base.focus());

  dblClickHandler(e) {
    if (!this.state.writeMode) {
      const focusPosition = [];
      const path = e.composedPath();
      let i = 0;
      while (path[i] && undefined === path[i].dataset?.key) {
        i++;
      }

      e.preventDefault();
      if (path[i] && window.getSelection) {
        let nodeOffset = 0;
        const selection = getSelection();
        const { anchorOffset, focusOffset: end } = selection;
        if (i > 0) {
          let node = path[0];
          do {
            const { previousSibling } = node;
            nodeOffset += previousSibling?.textContent?.length || 0;
            node = previousSibling || node.parentNode;
          } while (node && node !== path[i]);
          this.setState({ focusText: selection.toString() });
        }
        Object.assign(focusPosition, {
          start: nodeOffset + anchorOffset,
          end: nodeOffset + end,
          text: selection.toString(),
        });
      }
      this.setState({
        writeMode: true,
        focusPosition,
      });
    }
  }

  update({ text }) {
    this.setState({ writeMode: false });
    Object.assign(this.props, { text });
  }

  render() {
    console.log("render");
    return (
      <section
        className="newsletter-footer"
        data-type="Footer"
        onTouchEnd={this.#touchHandler}
        onClick={this.#clickHandler}
        onDblclick={this.#dblClickHandler}
        onKeyUp={this.#keyboardHandler}
        tabIndex={0}
      >
        <output hidden data-key="text">
          {this.props.text}
        </output>
        <MarkdownContent
          content={this.props.text}
          attributes={{
            ["data-key"]: true,
            ["data-ignore"]: true,
          }}
        />

        <Edit
          componentName="Footer"
          active={this.state.writeMode}
          props={{
            ...this.props,
            focusPosition: this.state.focusPosition,
            saveState: this.update.bind(this),
            resetState: this.#closeDialog,
          }}
        />
      </section>
    );
  }
}
