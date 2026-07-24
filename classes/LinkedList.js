import Node from "./Node.js";

class LinkedList {
  #headNode = null;
  set headValue(node) {
    this.#headNode = node;
  }
  get Head() {
    return this.#headNode;
  }
  append(value) {
    const node = new Node();
    node.value = value;
    if (this.Head === null) this.headValue = node;
    else {
      let tempNode = this.Head;
      while (tempNode.Next !== null) tempNode = tempNode.Next;
      tempNode.next = node;
    }
  }
  prepend(value) {
    const node = new Node();
    node.value = value;
    if (this.Head === null) this.headValue = node;
    else {
      node.next = this.Head.Next;
      this.Head.next = node;
    }
  }
  size() {
    if (this.Head === null) return 0;
    let tempList = this.Head;
    let counter = 1;
    while (tempList.Next !== null) {
      tempList = tempList.Next;
      counter += 1;
    }
    return counter;
  }
  head() {
    if (this.Head === null) return;
    return this.Head.Value;
  }
}
export default LinkedList;
