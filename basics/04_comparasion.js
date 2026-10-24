/* Equalilty (==) and comparator (>= , <= , > , <) conversion converts NULL to a number
in out case it will convert it to 0 */

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

/* During the comparasion make sure both the DataTypes are same */

console.log("22" == 22) //true
console.log("22" === 22) //false

/* with == it only checks value and === is strict comparator it checks value as well as datatype */
