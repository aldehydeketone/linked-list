class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  
    prepend(value) {
      const node = new Node(value, this.head);
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    }
  
    getSize() {
      return this.length;
    }
  
    getHead() {
      return this.head;
    }
  
    getTail() {
      return this.tail;
    }
  
    at(index) {
      if (index < 0 || index > this.length - 1) return null;
      let current = this.head;
      let i = 0;
      while (i < index) {
        i++;
        current = current.next;
      }
      return current;
    }
  
    pop() {
      if (!this.head) return null;
      const nodeToRemove = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        let penultimate;
        while (current) {
          if (current.next === this.tail) {
            penultimate = current;
            break;
          }
          current = current.next;
        }
        penultimate.next = null;
        this.tail = penultimate;
      }
      this.length--;
      return nodeToRemove;
    }
  
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return null;
    }
  
    toString() {
      let str = '';
      let current = this.head;
      while (current) {
        str += current.value + ' -> ';
        current = current.next;
      }
      str += 'null';
      return str;
    }
  }