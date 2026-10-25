//--------------------------------------IF-ELSE-----------------------------------------

let isLogged = true
let isDebitCard = true
if(isLogged && isDebitCard && 1<2){
    console.log("Allowed the access of the course")
}
else if(isLogged && (!isDebitCard)){
    console.log("allowed the access of the portal")
}
else{
    console.log("Not Allowed")
}

//--------------------------------------SWITCH-----------------------------------------

let days = "wed"

switch(days){
    case "mon":
        console.log("This is Monday")
        break;
    case "tue":
        console.log("This is Tuesday")
        break;
    case "wed":
        console.log("This is Wednesday")
        break;
    case "thu":
        console.log("This is Thusday")
        break;
    case "fri":
        console.log("This is Friday")
        break;
    case "sat":
        console.log("This is Saturday")
        break;
    case "sun":
        console.log("This is Sunday")
        break;
    default:
        console.log("Invalid Input")
}

// Given below are the falsy-values
// 0 , "" , null , false , BigInt 0n , null , undefined , NaN

//Given below are truthy-values
// 'false' , '0' , function(){} , " " , [] , {} , restall which are not falsy value

let obj1 = {}

if(Object.keys(obj1).length>0){
    console.log("Object is Empty")
}
else{
    console.log("Object is not Empty")
}

//The Nullish Coalescing Operator (??) acts as a safety check when data might be null or undefined.

let val1 = 12 ?? 20
let val2 = null ?? 20
let val3 = undefined ?? 20
console.table([val1,val2,val3]);

//Ternary Operator

(val1 > 10) ? console.log("val1 is Greater then 10"):console.log("val1 is not greater then 10")