let arr = [1,2,3,5,15,6,9,34,33]
for(let i = 0;i<arr.length;i++){
    if(arr[i]==15){
        continue
    }
    if(arr[i]==34){
        break;
    }
    console.log(arr[i]*10)
}

//-----------------------------------------WHILE-LOOP------------------------------------

let indx = 0
while (indx<arr.length){
    console.log(`Value is ${arr[indx]}`)
    indx++
}

let val = 10
{
    console.log(`Value in DO-WHILE loop is ${val}`)
    val--
}while(val>15);

//----------------------------------HIGH-LEVEL-FOR-LOOP-----------------------------------

let arr1 = [1,2,3,4,5,6,7]
for(let curr of arr1){
    console.log(`value is ${curr}`)
}
let str = 'shlok'
for(let charr of str){
    console.log(`Character is ${charr}`)
}

let map = new Map()
map.set("Harsh","singh")
map.set("Satish","singh")
map.set("Harsh","tiware")
map.set("Ravi","teja")

// ForLoop on MAP

for(let[key,val] of map){
    console.log(`${key} => ${val}`)
}

let obj = {
    "game1":"counter strike",
    "game2":"wwe"
}

// ForLoop on Object

for(let key in obj){
    console.log(`Key = ${key} , Value = ${obj[key]}`)
}

for(let key in arr1){
    console.log(key)
}

//-----------------------------------------FOREACH-------------------------------------------
let arr2 = ['Singh','Devansh','Chodia']
arr2.forEach(function(item,indx,val){
    console.log(`${item}'s and indx ${indx} value ${val}`)
})

arr2.forEach((item)=>{
    console.log(`${item}'s`)
})

function printing(name){
    console.log(`Given name ${name}`)
}

arr2.forEach(printing)  //We only give reference of function not execute that

//Using FOREACH on arrays of objects----------------------------------------------------------
let language = [
    {
        "name":"Javascript",
        "endname":"js"
    },
    {
        "name":"Java",
        "endname":"java"
    },
    {
        "name":"Python",
        "endname":"py"
    },   
]

language.forEach((item)=>{
    console.log(`End name of ${item["name"]} language is ${item["endname"]}`)
})

//forEach don't return us values

//---------------------------------------FILTER--------------------------------------------
//Filter returns us array
let arr3 = [1,2,3,4,5,6,7,8]
let result = arr3.filter((val)=>val>4)
let result2 = arr3.filter((val)=>{return val>4})
console.log(result)   //[ 5, 6, 7, 8 ]
console.log(result2)  //[ 5, 6, 7, 8 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Biography", publish: 2001, edition: 2009 },
  { title: "Book Ten", genre: "Fantasy", publish: 1995, edition: 2012 },
  { title: "Book Eleven", genre: "Mystery", publish: 2003, edition: 2015 },
  { title: "Book Twelve", genre: "Science", publish: 2015, edition: 2020 },
  { title: "Book Thirteen", genre: "History", publish: 1990, edition: 2005 },
  { title: "Book Fourteen", genre: "Fantasy", publish: 2007, edition: 2018 },
  { title: "Book Fifteen", genre: "Fiction", publish: 2018, edition: 2022 }
];

//Find books of genere fiction and published after 1985
let result3 = books.filter((item)=>{
    return item.genre === 'Fiction' && item.publish>=1985
})
console.log(result3)

arr3 = [1,2,3,4,5,6,7,8]
let result4 = arr3.map((item)=>item+10)
console.log(result4)
//This is called method chaining 
result4 = arr3.map((item)=>item*10).map((item)=>item+1).filter((item)=>item>=50)
console.log(result4)

//-------------------------------------REDUCE-----------------------------------------

const cart = [
  {
    courseName: "JavaScript Basics",
    price: 999
  },
  {
    courseName: "Advanced JavaScript",
    price: 1499
  },
  {
    courseName: "React.js Masterclass",
    price: 2499
  },
  {
    courseName: "Node.js & Express",
    price: 1999
  },
  {
    courseName: "MongoDB Complete Guide",
    price: 1299
  },
  {
    courseName: "Full Stack MERN",
    price: 4999
  },
  {
    courseName: "Data Structures & Algorithms",
    price: 2999
  },
  {
    courseName: "System Design Fundamentals",
    price: 3499
  }
];

// I will calculate total value of the courses

let inital = 0;
let totalSum1 = cart.reduce(function(accumulator,current){
    console.log(`Accumulator - ${accumulator} CurrentValue - ${current.price}`)
    return accumulator+current.price
},inital)
console.log(totalSum1) //19792

let totalSum2 = cart.reduce((acc,curr)=>(acc+curr.price),inital)
let totalSum3 = cart.reduce((acc,curr)=>acc+curr.price,inital)
console.log(totalSum2) //19792
console.log(totalSum3) //19792