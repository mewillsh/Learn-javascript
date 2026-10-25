function add(num1,num2){  //Parameters of function
    console.log(num1+num2)
}
add(2,3) //Arguments of function

function isLogged(username = "Sam"){
    if(!username){
        return "Please enter the userName"
    }
    return `${username} is LoggedIn`
}
console.log(isLogged("Harsh"))   // Harsh is LoggedIn
console.log(isLogged())          // Sam is LoggedIn

// REST - Operator [Rest and spread operator are same name comes how we use them]

function cartTotal(val1, ...num){
    return num
}
console.log(cartTotal(10,20,30,40))

let product = {
    "name":"POCO M6 PRO 5G",
    "price":400
}
function productPrice(currProduct){
    return `Price of ${currProduct.name} is ${currProduct.price}$`
}
let array = [1,2,3,4,5,10]
function returnThird(currArray){
    return currArray[2]
}
console.log(returnThird(array))