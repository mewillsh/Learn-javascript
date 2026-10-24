// Object literals create a single object instance directly, whereas constructors and classes
// act as blueprints for creating multiple instances. A Singleton is a separate design pattern
// that restricts creation to one shared instance.

//optional-chaining

let obj1 = new Object()
console.log(obj1)
obj1 = {
    name:"deva",
    email:"exampl@gmail.com",
    isLogged:true
}
let obj2 = {
    "fullname":{
        "Student":{
            "firstName":"harsh",
            "lastName":"singh"
        }
    },
    number:44553433433
}
console.log(obj2.fullname.Student.firstName)
//Optional-Chaining - It is used when we are unsure whether API with send certain field or not.
//console.log(obj2.fullname?.Student.firstName)

let obj3 = Object.assign({},obj1,obj2) //target , stored-objects
let obj4 = {...obj1,...obj2} // Combining them with spread Method
console.log(obj3)
console.log(obj4)

let db = [
    {
        "id":1,
        "email":"harh@gmail.com"
    },
    {
        "id":2,
        "email":"example@gmail.com"
    }
]
console.log(db[1].email)

//Important Object Manupilation Methods
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

// [ 'name', 'email', 'isLogged' ]
// [ 'deva', 'exampl@gmail.com', true ]
// [
//   [ 'name', 'deva' ],
//   [ 'email', 'exampl@gmail.com' ],
//   [ 'isLogged', true ]
// ]

//Used to Check whether this property Object has or not return type boolean
console.log(obj1.hasOwnProperty("name")) //true
console.log(obj1.hasOwnProperty("number")) //false

//Object Destructing

let obj5 = {
    "name":"Harsh Singh",
    "selected":"Y",
    "role":"Prime"
}
let {selected} = obj5
let {selected:select} = obj5  // Here we are giving it another name
console.log(selected)
console.log(select)