# DOM CRUD Quick Revision 🚀

## Create Element

```javascript
let element = document.createElement("li")
```

Creates a new HTML element.

---

## Add Content

### Method 1 (Not Preferred)

```javascript
element.innerHTML = "Java"
```

- Parses HTML
- Less secure

### Method 2 (Preferred)

```javascript
element.appendChild(
    document.createTextNode("Java")
)
```

- No HTML parsing
- Faster
- Safer

---

## Append to DOM

```javascript
ulNode.appendChild(element)
```

Adds element at the end.

---

## Select Elements

```javascript
document.querySelector(".language")
```

First matching element.

```javascript
document.querySelector(
    ".language li:nth-child(2)"
)
```

Second `<li>`.

```javascript
document.querySelector(
    ".language li:first-child"
)
```

First `<li>`.

---

## Update Element

### Change Content

```javascript
secondElement.innerHTML = "Mojo"
```

Output:

```html
<li>Mojo</li>
```

---

## Replace Element

```javascript
firstLanguage.replaceWith(newElement)
```

Before:

```html
<li>Python</li>
```

After:

```html
<li>TypeScript</li>
```

---

## outerHTML

```javascript
newElement.outerHTML =
'<li>Changed</li>'
```

Replaces the entire element.

---

## Delete Element

```javascript
element.remove()
```

Removes node from DOM.

---

# Methods Used

```javascript
querySelector()
createElement()
createTextNode()
appendChild()
innerHTML
outerHTML
replaceWith()
remove()
```

---

# CRUD Mapping

```text
CREATE  → createElement(), appendChild()

READ    → querySelector()

UPDATE  → innerHTML,
           outerHTML,
           replaceWith()

DELETE  → remove()
```

---

# Interview One-Liners

✅ `createTextNode()` is preferred over `innerHTML` because it avoids HTML parsing and is more secure.

✅ `innerHTML` changes content inside an element.

✅ `outerHTML` replaces the entire element.

✅ `appendChild()` adds a node.

✅ `replaceWith()` replaces a node.

✅ `remove()` deletes a node.

✅ `nth-child(2)` selects the second child element.
