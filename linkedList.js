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

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
          throw new Error('Index out of bounds');
        }
    
        if (index === 0) {
          this.prepend(value);
          return;
        }
    
        if (index === this.length) {
          this.append(value);
          return;
        }
    
        const newNode = new Node(value);
        const previousNode = this.at(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
      }

      removeAt(index) {
        if (index < 0 || index >= this.length) {
          throw new Error('Index out of bounds');
        }
    
        if (index === 0) {
          this.head = this.head.next;
          if (!this.head) {
            this.tail = null;
          }
        }

        const previousNode = this.at(index - 1);
        previousNode.next = previousNode.next.next;
        if (index === this.length - 1) {
            this.tail = previousNode;
        }   
        this.length--;
      }
  }

//   The next property is the key to how a linked list stores data in a sequence. Each node in the linked list has a next property, which points to the next node in the list. This creates a chain of nodes, which is the sequence of data in the list.
  
//   When you create a new node and append it to the list, you're adding it to the end of this chain. Here's how it works:
  
//   You create a new node with a value. This node's next property is null, because it's not linked to any other node yet.
  
//   You append this node to the list. If the list is empty (i.e., its head property is null), you set the head and tail of the list to this new node. Now the list has one node, and its next property is null, indicating the end of the list.
  
//   If the list is not empty, you link the new node to the end of the list. You do this by setting the next property of the current tail node to the new node. This creates a link from the current last node in the list to the new node. Then you update the tail of the list to the new node, because it's now the last node in the list.
  
//   Now the list has a chain of nodes, each linked to the next by its next property. The head of the list is the first node in this chain, and the tail is the last node. The next property of the last node is null, indicating the end of the list.
  
//   So, the next property doesn't store the sequence of data itself. Instead, it creates links between the nodes, which forms the sequence. The head and tail properties of the list, and the next properties of the nodes, together define the sequence of data in the list.