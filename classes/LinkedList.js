import Node from "./Node.js";

class LinkedList {
  #headNode = null;
  set head(node) {
    this.#headNode = node;
  }
  get Head() {
    return this.#headNode;
  }
  append(value) {
    const node = new Node();
    node.value = value;
    if (this.Head === null) this.head = node;
    else {
      let tempNode = this.Head;
      while (tempNode.Next !== null) tempNode = tempNode.Next;
      tempNode.next = node;
    }
  }
  prepend(value) {
    const node = new Node();
    node.value = value;
    if (this.Head === null) this.head = node;
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
}
export default LinkedList;
