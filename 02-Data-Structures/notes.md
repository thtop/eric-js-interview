## Introduction to Data Structures and Important Concepts

### What Are Data Structures?

- A way fo **organizing** data that is stored in a computer or database
- Many different types of data structures
- Each type of data structure represents a different way of **organizing** the data

### Why are there different types of data structures?

- They all have different strengths and weaknesses
- Some are fast at **storing** and **recording** data, while others are not
- Some are fast at **searching** and **retrieving** data, while others are not

### Why are data structures important to know?

- Can have big impact on how **performant**, **quick**, and **efficiently** a program runs
  - Linked List
  - Hash Table
- Reinforce knowledge of JavaScript algorithms and other important concepts
  - constructor function
  - recursion
  - `this` keyword
  - prototype object
  - Big O Notation
- Be very well prepared for technical interview questions

### Constructor functions and `this` keyword

```js
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user = new User("Laxe", "Commancer", 19, "Woman");

console.log(user);
```

### The Prototype Object

```js
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

User.prototype.emailDomain = "@factbook.com";
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
};

const user1 = new User("Commander", "Lexa", 23, "Woman");
const user2 = new User("Clarke", "Griffin", 19, "Woman");

console.log(user1.getEmailAddress());
console.log(user2.getEmailAddress());
```
