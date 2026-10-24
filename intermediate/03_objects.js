// Object literals ({}) create a new object instance each time they are evaluated.
// A singleton is a design pattern that ensures only one instance of an object exists 
// and is shared throughout the application.
// Constructor functions and classes can create multiple instances using the new keyword.

let currSym = Symbol("sym1")
let obj = {
    "name":"Anuj",
    "city":"Noida",
    "islogged":true,
    "last logged":["monday","saturday"],
    [currSym]:"Symbol value",
    "symbolRef":currSym
}

console.log(obj["name"])
console.log(obj["last logged"][1])
console.log(obj[currSym])
console.log(typeof obj[currSym])
console.log(typeof obj["symbolRef"])

// To freeze/lock an object = Object.freeze(object name).

obj.testFunction = function(){
    console.log("Hello World")
}
console.log(obj)
console.log(obj.testFunction())