import Observable from "./Observable.js";

export default new (class TemplateComponents extends Observable {
  #components = {};

  set(newData) {
    this.#components = newData;
    this.notify(newData);
  }

  get() {
    return this.#components;
  }
})();
