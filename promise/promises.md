# JavaScript Promises - Quick Revision Notes

## 1. Promise Basics

A Promise represents the eventual completion or failure of an asynchronous operation.

### States
- Pending
- Fulfilled (resolve)
- Rejected (reject)

### Create a Promise

```js
let promise = new Promise((resolve, reject) => {
    resolve();
});
```

### Consume a Promise

```js
promise.then(() => {
    console.log("Promise resolved");
});
```

### Promise without Variable

```js
new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log("Executed");
});
```

---

## 2. Passing Data Through resolve()

```js
resolve({name: "Harsh"});
```

Receive data using:

```js
promise.then((data) => {
    console.log(data);
});
```

### Flow

```txt
resolve(value)
      ↓
   then(value)
```

---

## 3. Promise Chaining

Return values from one `.then()` to another.

```js
promise
    .then((data) => {
        return data.name;
    })
    .then((name) => {
        console.log(name);
    });
```

### Flow

```txt
then()
 ↓ return
then()
```

---

## 4. Error Handling

Reject a Promise:

```js
reject({ message: "Something went wrong" });
```

Handle errors:

```js
promise.catch((error) => {
    console.log(error.message);
});
```

### Flow

```txt
reject()
   ↓
catch()
```

---

## 5. finally()

Runs regardless of success or failure.

```js
promise.finally(() => {
    console.log("Always Executes");
});
```

### Use Cases
- Loader cleanup
- Closing connections
- Hiding spinners

---

## 6. Promise Chain Behavior

```js
promise
    .then(...)
    .catch((err) => {
        return "Recovered";
    })
    .then((value) => {
        console.log(value);
    });
```

### Rule

```txt
catch returns value
        ↓
 Chain becomes resolved
        ↓
 Next then() executes
```

---

## 7. Async / Await

### Keywords

```txt
async  -> Function works with Promises
await  -> Wait for Promise result
```

### Example

```js
async function getData() {
    const response = await promise;
    console.log(response);
}
```

### Error Handling

```js
async function getData() {
    try {
        const response = await promise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
```

---

## 8. async/await vs then()

### Promise Style

```js
promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```

### Async-Await Style

```js
try {
    const data = await promise;
} catch (err) {
    console.log(err);
}
```

---

## 9. Fetch API

`fetch()` returns a Promise.

```js
const response = await fetch(url);
```

### Response ≠ JSON

Wrong ❌

```js
JSON.parse(response);
```

Correct ✅

```js
const data = await response.json();
```

---

## 10. Fetch with Async/Await

```js
async function getUser() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    console.log(data);
}
```

---

## 11. Fetch with Promise Chaining

```js
fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

---

## 12. Most Common Mistakes

### Forgetting await

```js
const data = fetch(url);
```

Output:

```txt
Promise { <pending> }
```

Correct:

```js
const data = await fetch(url);
```

---

### Resolving Instead of Rejecting

Wrong ❌

```js
resolve({message: "Error"});
```

Correct ✅

```js
reject({message: "Error"});
```

---

### Parsing Response Manually

Wrong ❌

```js
JSON.parse(response);
```

Correct ✅

```js
response.json();
```

---

## Interview One-Liners

```txt
Promise = Object representing future value.

resolve() → then()

reject() → catch()

finally() runs always.

async functions always return a Promise.

await pauses execution until Promise settles.

fetch() returns a Promise.

response.json() also returns a Promise.

catch() can return a value and continue the chain.

A Promise can be settled only once.
```