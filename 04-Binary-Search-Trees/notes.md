## Binary Search Trees

### What is A Binary Search Tree?

### Recursion Part 1

### Recusion Part 2 and The Call Stack

```js
function func() {
  if (
    // base case
    return somethnig;
  ) else {
    // recursive case
    func();
  }
}
```

```js
// Factorian (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));
```

### Insert method

### Testing Insert

### Contains Method

### Testing Contains

### Depth First Traversal - In-Order

### Refactoring Depth First Traversal Method

### Depth First Traversal - Pre-Order

### Testing Depth First Traversal Pre-Order

### Depth First Traveral - Post-Order

### Breadth First Traversal - Part 1

### Breadth First Traversal - Part 2

### Testing Breadth First Traversal

### Binary Search Tree - Independent Exercise

### Binary Search Tree - Exercise Review

### Binary Search Tree - Wrap-Up

### Binary Search Tree Source Code
