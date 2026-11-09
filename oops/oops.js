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

//Constructior Function - Every time constructor function gives us new instance 