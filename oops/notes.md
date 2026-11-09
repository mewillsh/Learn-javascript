javascript and classes 
javascript is prototype base language I has classes but
it is just a syntactical suger under the hood there is 
prototypes only

 - Object Literals
 - Construction function
 - Prototypes
 - Classes
 - Instances (new,this)

# JavaScript Objects & Constructor Functions - Revision Notes

## 1. Object Literal

```js
let data = {
    name: "Sona",
    isLogged: true,
    location: "Mumbai",

    details: function () {
        console.log(this.name, this.location);
    }
}
```

### Why?

- Object Literal is the simplest way to create an object.
- Used when only a few objects are needed.
- Stores both **properties** and **methods** together.

---

## Accessing Properties

```js
console.log(data.isLogged);
```

### Output

```text
true
```

### Why?

Accessing a single property from the object using dot notation.

---

## Object Method

```js
data.details();
```

### Output

```text
Sona Mumbai
```

### Why?

- `details()` is a method stored inside the object.
- Methods are simply functions attached to objects.
- `this` refers to the object that called the method.

```js
this.name
```

becomes

```js
data.name
```

---

# Understanding `this`

```js
details: function(){
    console.log(this.name, this.location);
}
```

### Why?

When called as:

```js
data.details()
```

`this` points to:

```js
data
```

Therefore:

```js
this.name
```

becomes

```js
data.name
```

and

```js
this.location
```

becomes

```js
data.location
```

---

# Constructor Function

```js
function Profile(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
```

### Why?

- Used to create multiple similar objects.
- Avoids repeating object literals.
- Works like a blueprint for creating users.

---

# Creating Instance

```js
let user1 = new Profile(
    "Vishnu",
    12,
    5.11
);
```

### Why?

- `new` creates a brand-new object.
- Each object gets its own copy of properties.

Result:

```js
{
  name: "Vishnu",
  age: 12,
  height: 5.11
}
```

---

# Constructor Method

```js
this.greeting = function(){
    console.log(
        `Hello world by ${this.name}`
    );
}
```

### Why?

Adds a method to every newly created object.

Usage:

```js
user1.greeting();
```

Output:

```text
Hello world by Vishnu
```

---

# What Happens When We Use `new`?

```js
let user1 = new Profile(...)
```

### Step 1

An empty object is created.

```js
{}
```

---

### Step 2

Constructor function gets called.

```js
Profile(...)
```

---

### Step 3

`this` points to the newly created object.

```js
this.name = name;
```

becomes

```js
{
  name: "Vishnu"
}
```

---

### Step 4

All properties and methods are added.

```js
{
  name: "Vishnu",
  age: 12,
  height: 5.11,
  greeting: function(){}
}
```

---

### Step 5

The object is automatically returned.

```js
return this;
```

JavaScript does this internally.

---

# Implicit Return

Constructor:

```js
function Profile(name){
    this.name = name;
}
```

JavaScript internally treats it like:

```js
function Profile(name){
    this.name = name;

    return this;
}
```

### Why?

When using `new`, JavaScript automatically returns the created instance.

---

# Without `new`

```js
let user1 = Profile("Vishnu");
```

### Problem

- No new object is created.
- `this` may point to the global object (or be `undefined` in strict mode).
- Properties can overwrite existing values.
- Result is usually not what we want.

✅ Correct:

```js
let user1 = new Profile("Vishnu");
```

---

# Constructor vs Object Literal

| Object Literal | Constructor Function |
|---------------|---------------------|
| Creates one object | Creates many objects |
| Manual creation | Reusable blueprint |
| Good for static data | Good for multiple instances |
| Less reusable | Highly reusable |

Example:

### Object Literal

```js
let user = {
  name: "Harsh"
}
```

### Constructor

```js
function User(name){
  this.name = name;
}

let user1 = new User("Harsh");
let user2 = new User("Vishnu");
let user3 = new User("Sona");
```

---

# Mental Model

```text
Constructor Function
        ↓
new Keyword
        ↓
Empty Object Created
        ↓
this Points To Object
        ↓
Properties Added
        ↓
Object Returned
```

---

# Important Interview Points

### Object Method

```js
data.details()
```

`this` refers to the object before the dot.

---

### Constructor Function Naming

Convention:

```js
function Profile(){}
function User(){}
function Account(){}
```

Start with Capital Letter.

---

### `new` Keyword

Performs:

1. Creates empty object.
2. Binds `this` to that object.
3. Executes constructor function.
4. Returns created object.

---

### Constructor Functions are Blueprints

```js
function User(name){
    this.name = name;
}
```

Used to create many users efficiently.

---

# One-Line Summary

**Object literals create a single object, whereas constructor functions combined with the `new` keyword act as blueprints that create multiple independent object instances with their own properties and methods.**