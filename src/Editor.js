import { h, Component, Fragment, createRef } from "preact";

import ReOrderComponents from "./ReOrderComponents.js";
import Save from "./Save.js";
import Error from "./Error.js";

export default class Editor extends Component {
  #observer = new window.MutationObserver(this.handleMutation.bind(this));
  #childrenRefs = new WeakMap();

  #beforeRef = createRef();
  #afterRef = createRef();

  state = { hasError: false, showControls: false, reOrder: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.warn(error);
    return { hasError: true };
  }

  /**
   * @param {MutationRecord[]} mutationList
   * @param {MutationObserver} observer
   */
  handleMutation(mutationList, observer) {
    const data = this.#childrenRefs;
    for (const mutation of mutationList) {
      const { target, type } = mutation;
      switch (type) {
        case "childList":
          if (mutation.addedNodes.length) {
            Array.from(mutation.addedNodes).forEach(node => {
              if (!data.has(node)) {
                this.observeNode(node);
              }
              const { nextSibling } = mutation;
              if (nextSibling) {
                const content = data.get(target)?.content;
                const index = content?.indexOf(data.get(nextSibling));
                if (content && index !== -1) {
                  content.splice(index, 0, data.get(node));
                }
              } else {
                data.get(target)?.content.push(data.get(node));
              }
            });
          }
          if (mutation.removedNodes.length) {
            Array.from(mutation.removedNodes).forEach(node => {
              const content = data.get(target)?.content;
              const index = content?.indexOf(data.get(node));
              if (content && index !== -1) {
                content.splice(index, 1);
              }
            });
          }
          break;

        case "characterData":
          const { dataset, textContent } = target.parentElement;
          let parent = target;
          while (!this.#childrenRefs.has(parent)) {
            parent = parent.parentElement;
          }
          this.#childrenRefs.get(parent)[dataset.key] = textContent;
      }
    }
    console.log(data.get(this));
  }

  observeNode(node) {
    const { type, json } = node.dataset;

    if (json) {
      this.#observer.observe(node, { attributes: true });
      return this.#childrenRefs.set(node, JSON.parse(json));
    }

    if (type) {
      this.#observer.observe(node, { childList: true });
      this.#childrenRefs.set(node, { type, content: [] });
    }

    if (node.childElementCount) {
      Array.from(node.children).forEach(child => {
        const { ignore, key } = child.dataset;
        if (ignore) {
          // if ignore attribute is on the node, do nothing
        } else if (key) {
          Array.from(child.childNodes).forEach(el =>
            this.#observer.observe(el, { characterData: true })
          );
          this.#childrenRefs.get(node)[key] = child.textContent;
          child.contentEditable = true;
        } else {
          this.observeNode(child);
          this.#childrenRefs
            .get(node)
            ?.content?.push(this.#childrenRefs.get(child));
        }
      });
    }
  }

  componentDidMount() {
    this.#childrenRefs.set(this, {});
    let node = this.#beforeRef.current.nextElementSibling;
    while (node && node !== this.#afterRef.current) {
      this.observeNode(node);
      if (node.childElementCount) {
        Array.from(node.children).forEach(node => {
          this.#childrenRefs.get(this)[
            node.dataset.type
          ] = this.#childrenRefs.get(node).content;
        });
      } else {
        this.#childrenRefs.get(this)[
          node.dataset.type
        ] = this.#childrenRefs.get(node)?.content;
      }

      node = node.nextElementSibling;
    }
  }

  componentWillUnmount() {
    this.#observer.disconnect();
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.warn(error, info);
  }

  render() {
    return this.state.hasError ? (
      <Error />
    ) : (
      <>
        <header ref={this.#beforeRef}>
          <h1>{this.props.title}</h1>
        </header>
        {this.state.reOrder ? <ReOrderComponents /> : null}
        {this.props.children}
        <footer ref={this.#afterRef}>
          <Save />
        </footer>
      </>
    );
  }
}
