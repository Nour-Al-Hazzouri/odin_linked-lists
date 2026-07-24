class Node {
  #value = null;
  #nextNode = null;

  set value(newValue) {
    this.#value = newValue;
  }
  set next(newNode) {
    this.#nextNode = newNode;
  }
  get Value() {
    return this.#value;
  }
  get Next() {
    return this.#nextNode;
  }
}

export default Node;
