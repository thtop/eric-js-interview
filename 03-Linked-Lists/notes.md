## Linked List

### What Is A Linked List?
- head
- node
  - next
  - prev
- tail

```js
const node = {
  this.value = 7;
  this.next = nextNode;
  this.prev = prevNode;
}
```

### Linked List and `Node` Constructor Functions

```js
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}


LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};


LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  const val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  const val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  const currentNode = this.head;
  const counter = 0;
  while(counter < 10) {
    console.log(counter);
    counter++;
  }
};


const ll = new LinkedList();
ll.search();


// console.log(ll.removeTail());

```
