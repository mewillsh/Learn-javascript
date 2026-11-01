# JavaScript DOM Complete Revision Notes (From Your Screenshots)

## 1. Selecting Elements

### getElementById()
Selects an element using its `id`.

```javascript
const title = document.getElementById('title')
```

### querySelector()
Selects the **first matching element** using a CSS selector.

```javascript
document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')
```

### querySelectorAll()
Selects **all matching elements**.

```javascript
document.querySelectorAll('li')
```

Returns:

```javascript
NodeList(3)
```

## 2. Accessing Attributes

### id

```javascript
title.id
```

Output:

```javascript
"title"
```

### className

```javascript
title.className
```

Output:

```javascript
"heading"
```

Wrong:

```javascript
title.class
```

Output:

```javascript
undefined
```

## 3. getAttribute()

Used to read attribute values.

```javascript
element.getAttribute('attribute')
```

Examples:

```javascript
title.getAttribute('id')
title.getAttribute('class')
```

## 4. setAttribute()

Used to add or modify attributes.

```javascript
element.setAttribute('attribute', 'value')
```

Example:

```javascript
title.setAttribute('class', 'test')
```

Keep old class:

```javascript
title.setAttribute('class', 'test heading')
```

## 5. Style Manipulation

```javascript
element.style
```

Examples:

```javascript
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '15px'
```

### CSS → JavaScript

| CSS | JavaScript |
|------|------------|
| background-color | backgroundColor |
| font-size | fontSize |
| border-radius | borderRadius |
| margin-left | marginLeft |

## 6. innerText vs textContent

### innerText
Returns only visible text.

```javascript
title.innerText
```

### textContent
Returns all text.

```javascript
title.textContent
```

| innerText | textContent |
|------------|------------|
| Visible text only | All text |
| Ignores hidden text | Includes hidden text |
| Slower | Faster |

## 7. Selecting Child Elements

```javascript
const myul = document.querySelector('ul')
myul.querySelector('li')

const turnGreen = myul.querySelector('li')

turnGreen.style.backgroundColor = 'green'
turnGreen.style.padding = '10px'
```

## 8. querySelectorAll()

```javascript
const tempLiList = document.querySelectorAll('li')
```

```javascript
tempLiList[0]
tempLiList[1]
tempLiList[2]
```

```javascript
tempLiList[0].style.color = 'green'
```

## 9. NodeList

Returned by:

```javascript
querySelectorAll()
```

Supports `forEach()`:

```javascript
tempLiList.forEach(function(li){
  console.log(li)
})
```

## 10. getElementsByClassName()

```javascript
document.getElementsByClassName('list-item')
```

Returns:

```javascript
HTMLCollection(4)
```

## 11. HTMLCollection

Returned by:

```javascript
getElementsByClassName()
getElementsByTagName()
```

Does not support:

```javascript
tempClassList.forEach(function(li){})
```

## 12. Convert HTMLCollection to Array

```javascript
const myConvertedArray = Array.from(tempClassList)
```

```javascript
myConvertedArray.forEach(function(li){
  li.style.color = 'orange'
})
```

## 13. Real Website Example

```javascript
const myH2 = document.querySelectorAll('.mw-headline')
```

```javascript
myH2[0].innerText
```

Output:

```javascript
History
```

## 14. Modifying Multiple Elements

```javascript
myH2.forEach(function(h){
  h.style.color = 'red'
})
```

```javascript
myH2.forEach(function(h){
  h.style.color = 'black'
  h.style.backgroundColor = 'green'
  h.style.padding = '10px'
})
```

```javascript
myH2.forEach(function(h){
  h.innerText = 'Hitesh'
})
```

## Most Important Interview Comparisons

### querySelector vs querySelectorAll

| querySelector | querySelectorAll |
|--------------|------------------|
| First match | All matches |
| Returns Element | Returns NodeList |

### NodeList vs HTMLCollection

| NodeList | HTMLCollection |
|-----------|---------------|
| querySelectorAll() | getElementsByClassName() |
| forEach ✅ | forEach ❌ |
| Modern | Older |
| Easier to use | Needs conversion |

### getAttribute vs setAttribute

| getAttribute | setAttribute |
|--------------|-------------|
| Read value | Change/Add value |
| Returns attribute value | Modifies attribute |

### innerText vs textContent

| innerText | textContent |
|------------|------------|
| Visible text only | All text |
| Ignores hidden text | Includes hidden text |

## Golden Interview Lines

1. `querySelector()` returns the first matching element, while `querySelectorAll()` returns a NodeList of all matching elements.
2. `querySelectorAll()` returns a NodeList, which supports `forEach()`.
3. `getElementsByClassName()` returns an HTMLCollection, which does not support `forEach()` directly.
4. `Array.from()` converts an HTMLCollection into a real JavaScript array.
5. `innerText` returns visible text, while `textContent` returns all text including hidden content.
6. `getAttribute()` reads an attribute and `setAttribute()` modifies or creates an attribute.
