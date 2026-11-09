// This is Object Literal

let data = {
    "name":"Sona",
    "isLogged":true,
    "location":"Mumbai",
    "details":function(){
        console.log(this.name , this.location)
    }
}

console.log(data.isLogged)
data.details()

//Constructior Function - Every time constructor function gives us new instance when we use new Keyword
//without new keyword instance will be overwridden

function Profile(name,age,height){
    this.name = name
    this.age = age
    this.height = height

    this.greeting = function(){
        console.log(`Hello world by ${this.name}`)
    }

    //return this           JavaScript implicitly returns this if we don't explicitly return something else
}
let user1 = new Profile("Vishnu",12,5.11)
console.log(user1)

//1. when we use new-keyword first one empty object gets created which we call instance
//2. due to new-keyword constructor function get called and it packs all the arguments and give it back to us
//3. with this-keyword all the arguments gets injected
//4.then we gets the result