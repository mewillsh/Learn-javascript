# DOM Traversal & Dynamic Element Creation (One-Short Revision Notes)

## 1. Parent Element Selection
```js
const parent = document.querySelector('.parent')
```
✅ Selects first element having class `parent`.

---

## 2. Access Children
```js
parent.children
```
✅ Returns **HTMLCollection** of element children only.

```js
parent.children[1]
```
✅ Access second child (0-based indexing).

---

## 3. Loop Through Children
```js
for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}
```
✅ Prints content of all child elements.

---

## 4. Change Style Dynamically
```js
parent.children[1].style.color = "orange"
```
✅ Changes second child's text color.

---

## 5. First & Last Child
```js
parent.firstElementChild
parent.lastElementChild
```
✅ Get first and last element child.

---

## 6. Child → Parent
```js
const dayOne = document.querySelector('.day')

dayOne.parentElement
```
✅ Moves upward in DOM tree.

**Memory Trick:**  
Child → Parent = `parentElement`

---

## 7. Sibling Navigation
```js
dayOne.nextElementSibling
```
✅ Returns next sibling element.

**Memory Trick:**
```text
Parent
 ├── Monday
 ├── Tuesday
 └── Wednesday

Tuesday.nextElementSibling
→ Wednesday
```

---

## 8. childNodes vs children

```js
parent.childNodes
```

Returns:
- Elements
- Text nodes
- Line breaks
- Comments

```js
parent.children
```

Returns:
- Elements only

### Interview Line

> `children` gives only HTML elements, whereas `childNodes` gives everything including text nodes and comments.

---

# Dynamic Element Creation

## Step 1: Create Element
```js
const div = document.createElement('div')
```

✅ Creates element in memory only.

---

## Step 2: Add Class
```js
div.className = "main"
```

---

## Step 3: Add ID
```js
div.id = "myId"
```

Random ID:
```js
div.id = Math.round(Math.random()*10+1)
```

---

## Step 4: Add Attribute
```js
div.setAttribute("title","generated title")
```

---

## Step 5: Add CSS
```js
div.style.backgroundColor = "green"
div.style.padding = "12px"
```

---

## Step 6: Add Text

Method 1:
```js
div.innerText = "Chai aur Code"
```

Method 2 (Preferred)
```js
const addText = document.createTextNode("Chai aur Code")
div.appendChild(addText)
```

✅ More optimized because it directly creates a text node.

---

## Step 7: Attach to Webpage
```js
document.body.appendChild(div)
```

✅ Element finally appears on screen.

---

# DOM Traversal Cheat Sheet

```js
parent.children
parent.childNodes

parent.firstElementChild
parent.lastElementChild

child.parentElement

child.nextElementSibling
child.previousElementSibling
```

---

# Interview 30-Second Summary

> `children` returns only elements, while `childNodes` returns elements, text nodes, and comments. We can traverse the DOM using `parentElement`, `children`, and `nextElementSibling`. New elements are created using `document.createElement()`, configured using attributes/styles, populated using `createTextNode()` or `innerText`, and finally added to the page using `appendChild()`.
