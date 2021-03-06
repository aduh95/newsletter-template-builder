import Observable from "./Observable.js";

const DEFAULT_TITLE = "No template selected";

export default new (class TemplateName extends Observable {
  #currentName;
  #DOMNodeTitleForTemplateName;

  #updatePageTile = name => {
    this.#DOMNodeTitleForTemplateName.data = name;
  };

  constructor() {
    super();
    this.#DOMNodeTitleForTemplateName = document.createTextNode(DEFAULT_TITLE);
    document.head
      .querySelector("title")
      .append(" - ", this.#DOMNodeTitleForTemplateName);
    this.subscribe(this.#updatePageTile);
  }

  set(name) {
    if (name !== this.#currentName) {
      this.#currentName = name;
      this.notify(this.#currentName);
    }
  }

  get() {
    return this.#currentName;
  }
})();
