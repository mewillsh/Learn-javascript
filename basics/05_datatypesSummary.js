/* 
There are 7 Datatypes Primitive - Number , String , null , undefined , Boolean , BigInt , Symbol 
they store direct value in there variable
*/
let val1 = Symbol(120)
let val2 = Symbol(120)
console.log(val1==val2)
/* 
In Non-Premitive (Arrays , Object , Function) Data-Type variables stores refence to the memory 
location where actual Oject is Created in the heap memory
*/
let data = {
    name:"Harsh"
}
let data2 = data
data2.name = "Singh"
console.log(data.name)

let currFun = function(){
    console.log("Hello World")
}
currFun()
console.log(typeof currFun)
/*
There are mainly 2 types of datatypes :
1. Primitive ( call by value = copy version ):
- string =>  string 
- number => number
- Boolean => boolean
- null => object
- undefined => undefined 
- symbol => symbol
- Bigint  => Bigint

2. Non-Primitive ( reference type ):
- Array => object 
- Object => object
- Function => Object Function

3. JavaScript is "Dynamically typed language" because all type checks are being performed during Runtime .
*/

/* 
Primitive data types are stored by value. Whenever we access or assign them, we work with 
a copy of the value.
Non-primitive data types are stored in heap memory. Whenever we access or assign them, we get 
a reference to the memory location where the actual object is stored.
*/

