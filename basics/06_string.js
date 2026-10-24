let val1 = new String("Hitesh-FC")
console.log(val1.toUpperCase())
console.log(val1[2])
console.log(val1.charAt(2))

console.log(`Learning Javascript from ${val1}`)

console.log(val1.indexOf('t'))
console.log(val1.substring(0,4))
console.log(val1.slice(-4,-1)) //h-F

let val2 = "   harhs    "
console.log(val2.trim())
let val3 = "HarshPanday"
let val4 = val3.replace("Panday","Singh")
console.log(val4)
console.log(val3.includes("Panday"))
let curr = val1.split("-")
console.log(curr)
/* 
HITESH-FC
t
t
Learning Javascript from Hitesh-FC
2
Hite
h-F
harhs
HarshSingh
true
[ 'Hitesh', 'FC' ]
*/