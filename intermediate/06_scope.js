//Best example of Global scope and Block scope 
// ==========================================
// 1. GLOBAL SCOPE
// ==========================================
// These are declared in the open, just like in your file.
let a = 10;
const b = 20;
var c = 30;

console.log("--- Before Block ---");
console.log(a); // Outputs: 10
console.log(b); // Outputs: 20
console.log(c); // Outputs: 30

// ==========================================
// 2. BLOCK SCOPE
// ==========================================
if (true) {
    // We are now inside a block (between the { curly braces })
    let a = 100;   // Creates a NEW temporary 'a' just for this block
    const b = 200; // Creates a NEW temporary 'b' just for this block
    var c = 300;   // DANGER: Overwrites the global 'c' entirely!

    console.log("\n--- Inside the Block ---");
    console.log(a); // Outputs: 100 (using the block's let)
    console.log(b); // Outputs: 200 (using the block's const)
    console.log(c); // Outputs: 300 (using the overwritten var)
}

// ==========================================
// 3. BACK TO GLOBAL SCOPE
// ==========================================
console.log("\n--- After Block ---");
console.log(a); // Outputs: 10  (Safe! The original 'let' was untouched)
console.log(b); // Outputs: 20  (Safe! The original 'const' was untouched)
console.log(c); // Outputs: 300 (The problem with var: Our original 30 was destroyed!)

/*
Key Takeaway:
- let and const are block-scoped: they only exist within the { } curly braces  they' re declared in.
- var is functional-scope ( or  global-scoped), Not block-scoped -- it "leaks" outside.
- if/for/while blocks, which can cause bugs. Thats why we avoid using var.
- inside the {} are block scope, Outside it called global scope.
*/

function one(){
    let username = "Ravi"
    function two(){
        let password = "qwert"
        console.log(username)
    }
    //console.log(password)
    two()
}
one()
// Inner functions can access variables of their outer functions due to lexical scoping, 
// but outer functions cannot access variables declared inside inner functions.

first()
function first(){
    console.log("Namaste Duniya")
}
second()
second = function(){     //Error
    console.log("Hello World")
}

// Function declarations are fully hoisted along with their function body, so they can be 
// called before their declaration. Function expressions are assigned to variables. Only 
// the variable is hoisted, not the function assignment. Therefore, calling a function expression 
// before initialization results in a ReferenceError (let/const) or a TypeError (var).