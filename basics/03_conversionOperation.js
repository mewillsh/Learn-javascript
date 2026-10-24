let score = "2345"
console.log(typeof score)
let converted = Number(score)
console.log(converted)
console.log(typeof converted)

/*
"33" => 33
"33ad" => NaN
true => 1 
*/

let isLogged = 1
console.log(typeof isLogged)
let checkIsLogged = Boolean(isLogged)
console.log(typeof checkIsLogged)
console.log(checkIsLogged)

/*
1 -> true
0 -> false
"" -> false
"harsh" -> true
*/

let check = true
console.table([typeof check,check])
let checking = String(check)
console.table([typeof checking,checking])

/*
1234 -> "1234"
null -> "null"
undefined -> "undefined"
true -> "true"
*/

/************************************ OPERATIONS *************************************/

console.log(2**3)
console.log(10%2)
let str1 = "Harsh"
let str2 = " Singh"
let str3 = str1+str2
console.log(str3)
console.log("2"+3+3)
console.log(3+3+"2")

console.log(+true)
let num = 1
num++
console.log(num)
++num
console.log(num)
