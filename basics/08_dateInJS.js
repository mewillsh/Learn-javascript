let date = new Date() //Instance of the date object which gives us current DATE
console.log(date)
console.log(date.toString()) //Now we will write date in readable format
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())

console.log(typeof date) //Date is a type of object since we are creating instance of it.

let createDate1 = new Date(2026,0,23,4,35) //year-month-day-hours-min-sec-miniseconds
console.log(createDate1.toLocaleString())

let createDate2 = new Date("2023-04-03")
console.log(createDate2.toDateString())

console.log(createDate2.toLocaleString('default',{
    year:"numeric"
}))