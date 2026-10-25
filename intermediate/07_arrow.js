// Working of 'this' keyword

let user = {
    "name":"Raj",
    "fees":1200,
    "message":function(){
        console.log(`Thankyou ${this.name} for paying ${this.fees}`)
    }
}
user["message"]()      //Thankyou Raj for paying 1200
user.name = "Arpit"
user["fees"] = 2323
user.message()         //Thankyou Arpit for paying 2323

console.log(this)      //{}
/* this behaves differently in browsers and Node.js because their global execution contexts are 
different. In browsers, the global object is window, so top-level this refers to window. 
In Node.js, each file is executed inside a module wrapper function, so top-level this refers 
to module.exports rather than the global object. */

function fun(){
    let username = "Harsh"
    console.log(this.username)  //undefined - cannot use `this` in standalone function
}
fun()

function fun1(num1,num2){
    return num1+num2
}

fun2 = function(num1,num2){
    return num1+num2
}
//Ways to Define Arrow Function
fun3 = (num1,num2)=>{
    return num1+num2
}
fun4 = (num1,num2)=>num1+num2
fun5 = (num1,num2)=>({"name":"Deva","sum":num1+num2})

//Arrow functions DO NOT have their own this.They borrow this from the surrounding (lexical) scope.

