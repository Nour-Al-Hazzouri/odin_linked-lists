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
      let tempList = this.Head;
      while (tempList.Next !== null) tempList = tempList.Next;
      tempList.next = node;
    }
  }
  prepend(value) {
    const node = new Node();
    node.value = value;
    let tempList = this.Head;
    if (tempList === null) this.headValue = node;
    else {
      node.next = tempList.Next;
      tempList.next = node;
    }
  }
  size() {
    let tempList = this.Head;
    if (tempList === null) return 0;
    let counter = 1;
    while (tempList.Next !== null) {
      tempList = tempList.Next;
      counter += 1;
    }
    return counter;
  }
  head() {
    let tempList = this.Head;
    if (tempList === null) return;
    return tempList.Value;
  }
  tail() {
    let tempList = this.Head;
    if (tempList === null) return;
    while (tempList.Next !== null) tempList = tempList.Next;
    return tempList.Value;
  }
  at(index) {
    let tempList = this.Head;
    let counter = 0;
    if (tempList === null) return;
    while (tempList !== null) {
      if (counter === index) return tempList.Value;
      tempList = tempList.Next;
      counter += 1;
    }
    return;
  }
  pop() {
    let tempList = this.Head;
    if (tempList === null) return;
    const nodeValue = tempList.Value;
    this.headValue = tempList.Next;
    return nodeValue;
  }
  contains(value) {
    let tempList = this.Head;
    if (tempList === null) return false;
    while (tempList !== null) {
      if (tempList.Value === value) return true;
      tempList = tempList.Next;
    }
    return false;
  }
  findIndex(value) {
    let tempList = this.Head;
    let counter = 0;
    if (tempList === null) return -1;
    while (tempList !== null) {
      if (tempList.Value === value) return counter;
      tempList = tempList.Next;
      counter += 1;
    }
    return -1;
  }
  toString() {
    let tempList = this.Head;
    let accumulator = "";
    if (tempList === null) return "";
    while (tempList !== null) {
      accumulator += `( ${tempList.Value} ) -> `;
      tempList = tempList.Next;
    }
    return accumulator + null;
  }
  insertAt(index, ...values) {
    let tempList = this.Head;
    let counter = 0;
    let innerCounter = 0;
    let node;
    while (tempList !== null) {
      if (counter === index) {
        while (innerCounter !== values.length) {
          node = new Node();
          node.value = values[innerCounter];
          node.next = tempList.Next;
          tempList.next = node;
          tempList = tempList.Next;
          innerCounter += 1;
        }
      }
      tempList = tempList.Next;
      counter += 1;
    }
    if (index < 0 || index > counter) throw RangeError;
  }
  removeAt(index) {
    let tempList = this.Head;
    let previousNode = this.Head;
    let counter = 0;
    while (tempList !== null) {
      tempList = tempList.Next;
      counter += 1;
    }
    if (index < 0 || index > counter) throw RangeError;
    tempList = this.Head;
    counter = 0;
    while (tempList !== null) {
      if (counter === index && index === 0) {
        this.headValue = previousNode.Next;
        tempList = tempList.Next;
      } else if (counter === index && tempList.Next !== null)
        previousNode.next = tempList.Next;
      else if (counter === index && tempList.Next === null)
        previousNode.next = null;

      if (tempList === previousNode) tempList = tempList.Next;
      else {
        tempList = tempList.Next;
        previousNode = previousNode.Next;
      }
      counter += 1;
    }
  }
}
export default LinkedList;
