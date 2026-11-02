# JavaScript Core Concepts for Interviews

---

# 1. Is JavaScript Synchronous or Asynchronous?

## Answer
JavaScript is **single-threaded** and **synchronous by default**.

- Single-threaded = One Call Stack
- Synchronous = Executes one line at a time in sequence

### Example

```js
console.log(1);
console.log(2);
console.log(3);
```

### Output

```text
1
2
3
```

Each statement waits for the previous statement to finish execution.

---

# 2. What is Single-Threaded?

## Answer

JavaScript has only **one Call Stack** and can execute only **one operation at a time**.

### Example

```js
console.log("Start");

while (true) {
  // Infinite loop
}

console.log("End");
```

### Output

```text
Start
```

The Call Stack never becomes free, so `"End"` is never executed.

---

# 3. What is an Execution Context?

## Answer

An Execution Context is the environment in which JavaScript code executes.

It contains:

- Variable Memory
- Scope Chain
- `this` Value

### Types

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

### Example

```js
let a = 10;

function greet() {
  let b = 20;
}

greet();
```

### Flow

```text
Global Execution Context
        ↓
Function Execution Context (greet)
```

---

# 4. What is the Call Stack?

## Answer

The Call Stack keeps track of function execution order.

### Example

```js
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();
```

### Stack

```text
three()
two()
one()
Global
```

### After Execution

```text
Global
```

Functions are removed from the stack after they finish executing.

---

# 5. What is Memory Heap?

## Answer

Memory Heap is the memory area where objects and reference data are stored.

### Example

```js
let user = {
  name: "Harsh",
  age: 22,
};
```

### Storage

```text
Memory Heap
    ↓
Object Data

Stack
    ↓
Reference to Object
```

---

# 6. What is Blocking Code?

## Answer

Blocking code stops the execution flow until the current task completes.

### Example (Node.js)

```js
const data = fs.readFileSync("file.txt");

console.log(data);
console.log("End");
```

### Flow

```text
Read File
    ↓
Print Data
    ↓
Print End
```

Execution waits until the file is completely read.

---

# 7. What is Non-Blocking Code?

## Answer

Non-blocking code allows the program to continue execution while a task runs in the background.

### Example

```js
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});

console.log("End");
```

### Output

```text
End
File Content
```

The file reading operation happens asynchronously.

---

# 8. Why Can JavaScript Perform Asynchronous Operations?

## Answer

Although JavaScript is single-threaded, the browser provides:

- Web APIs
- Callback Queue
- Microtask Queue
- Event Loop

These components handle asynchronous operations outside the JavaScript engine.

---

# 9. What are Web APIs?

## Answer

Web APIs are features provided by the browser and are not part of JavaScript itself.

### Examples

```js
setTimeout();
setInterval();
fetch();
addEventListener();
```

These APIs execute in the browser environment.

---

# 10. What is the Callback Queue (Task Queue)?

## Answer

The Callback Queue stores completed asynchronous callbacks waiting for execution.

### Example

```js
setTimeout(() => {
  console.log("Hello");
}, 0);
```

### Flow

```text
setTimeout
    ↓
Web API
    ↓
Callback Queue
    ↓
Call Stack
    ↓
Execute
```

---

# 11. What is the Microtask Queue?

## Answer

The Microtask Queue stores promise-related callbacks.

### Examples

```js
Promise.then();
Promise.catch();
Promise.finally();
queueMicrotask();
```

### Example

```js
Promise.resolve().then(() => {
  console.log("Promise Executed");
});
```

### Flow

```text
Promise Resolved
        ↓
Microtask Queue
        ↓
Call Stack
        ↓
Execute
```

---

# 12. Which Queue Has Higher Priority?

## Answer

```text
Microtask Queue
        ↑
Higher Priority

Task Queue
        ↓
Lower Priority
```

The Event Loop always processes all Microtasks before processing the Task Queue.

### Example

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("Start");
```

### Output

```text
Start
Promise
Timeout
```

---

# 13. What is the Event Loop?

## Answer

The Event Loop continuously checks whether the Call Stack is empty.

If it is empty:

1. Process all Microtasks.
2. Process one Task Queue callback.
3. Push the callback to the Call Stack.

### Flow

```text
Call Stack Empty?
        ↓
       Yes
        ↓
Check Microtask Queue
        ↓
Execute Microtasks
        ↓
Check Task Queue
        ↓
Move Callback to Call Stack
        ↓
Execute
```

---

# 14. Does a Callback Enter the Call Stack Again?

## Answer

✅ Yes.

Callbacks are not executed directly from the queue.

The Event Loop first moves the callback from:

```text
Task Queue / Microtask Queue
              ↓
         Call Stack
              ↓
          Execution
              ↓
        Removed from Stack
```

JavaScript can only execute code that exists on the Call Stack.

---

# 15. Complete Event Loop Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

fetch("url")
  .then(() => {
    console.log("Fetch");
  });

console.log("End");
```

### Step-by-Step Flow

```text
Start
  ↓
Call Stack

setTimeout
  ↓
Web API

fetch
  ↓
Web API

End
  ↓
Call Stack

Fetch Resolves
  ↓
Microtask Queue

Timer Finishes
  ↓
Task Queue

Call Stack Empty
  ↓
Event Loop

Microtask Queue Executes First
  ↓
Fetch

Task Queue Executes
  ↓
Timer
```

### Output

```text
Start
End
Fetch
Timer
```

---

# Interview One-Liner

> JavaScript is single-threaded and synchronous by default. Asynchronous behavior is achieved using Web APIs, the Callback Queue, the Microtask Queue, and the Event Loop, which moves completed callbacks back to the Call Stack for execution.