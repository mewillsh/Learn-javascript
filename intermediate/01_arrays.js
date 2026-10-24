let myHero = ["Iron-Man","hulk","spider-man"]
console.log(myHero[2])

let array = new Array(1,2,3,4,5,5)
console.log(array[0])

array.unshift(6)
array.unshift(8)
console.log(array) //This adds value in the first position [8, 6, 1, 2, 3, 4, 5, 5] and shift rest
array.shift()
console.log(array)

console.log(array.join())
console.log(array.join('-'))
console.log(array.join(''))

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change 
//    beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include) = returns new array and 
//     original value remains unchanged. Use when you need to extract a portion of an array without 
//     modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted 
// one and original value changed.Use when you need to add, remove, or replace elements within 
// an array.

console.log("original",array)
let val1 = array.slice(1,3)
console.log("splice",val1)
console.log("Arrays After Operation",array)
console.log("original",array)
let val2 = array.splice(1,3)
console.log("splice",val2)
console.log("Arrays After Operation",array)

// original [ 6, 1, 2, 3, 4, 5, 5 ]
// splice [ 1, 2 ]
// Arrays After Operation [ 6, 1, 2, 3, 4, 5, 5 ]
// original [ 6, 1, 2, 3, 4, 5, 5 ]
// splice [ 1, 2, 3 ]
// Arrays After Operation [ 6, 4, 5, 5 ]