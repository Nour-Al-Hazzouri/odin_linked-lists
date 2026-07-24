import Node from "./Node.js";

class LinkedList {
  #headNode = null;
  set head(node) {
    this.#headNode = node;
  }
  get Head() {
    return this.#headNode;
  }
}
export default LinkedList;
