## Withdraw From Account

### Question

```js
const account1 = {
  name: "Jen",
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return "Amount in account: " + this.totalAmount;
  }
};

const account2 = {
  name: "James",
  totalAmount: 8000
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());
console.log(withdrawFromAccount(200)());

/*

Info: Start process (5:13:05 AM)
Amount in account: 7500
Amount in account: 7300
Info: End process (5:13:05 AM)

*/
```

### Solution

```js
const account1 = {
  name: "Jen",
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return "Amount in account: " + this.totalAmount;
  }
};

const account2 = {
  name: "James",
  totalAmount: 8000
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());
console.log(withdrawFromAccount(200)());

/*

Info: Start process (5:17:01 AM)
Amount in account: 7500
Amount in account: 7300
Info: End process (5:17:02 AM)


*/
```
