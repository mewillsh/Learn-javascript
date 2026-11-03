//Creation of Promise

let createPromise = new Promise(function(resolve,reject){
    console.log("Promise work is in Process")
    resolve()
})

createPromise.then(function(){
    console.log("Running form them")
})

new Promise(function(resolve,reject){
    console.log("Promise without reference")
    resolve()
}).then(function(){
    console.log("output from then(), Promise without reference")
})
//Passing Data via Promise

let promiseTwo = new Promise(function(resolve,reject){
    //wrote set interval just for example it has noting to do with working of resolve
    setTimeout(()=>{
        console.log("This is from proiseTwo")
        resolve({"harsh":"singh","lalu":"Yadav"})
    },1000)
})

promiseTwo.then(
    function(val){
        console.log(val)
    }
)
//Doing Promise Chaining

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
            let isError = true
            if(!isError){
                console.log("PromiseThree Resolved")
                resolve({"babu":"shona","papa":"mummy"})
            }
            else{
                console.log("PromiseThree Rejected")
                reject({"message":"SOMETHING WENT WRONG"})
            }
    },1000)
})

promiseThree.then(function(input){
    console.log(input)
    return input["babu"]
}).then(function(input){
    console.log(input)
}).catch(function(input){
    console.log(input)
    console.log("this is catch-1")
}).finally(function(){
    console.log("PROMISE IS ACCEPTED OR REJECTED.....")
})

// Promise handling with async-await

let promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
            let isError = true
            if(!isError){
                console.log("PromiseThree Resolved")
                resolve({"async":"await","another":"way"})
            }
            else{
                console.log("PromiseThree Rejected")
                reject({"message":"SOMETHING WENT WRONG"})
            }
    },1000)
})

// async  -> "This function can work with Promises."
// await  -> "Wait for this Promise and give me the result."

async function promiseFourResolver(){
    try{
    let response = await promiseFour
    console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

promiseFourResolver();

// Fetch Sends response as a Promise so handling that with async-await and promise

async function handleFetch(){
    try{
        let error = false
        if(error) throw new Error("Not able to Fetch")
        let response = await fetch("https://randomuser.me/api");
        let result = await response.json()
        console.log(result)
    }
    catch(error){
        console.log("ERROR",error)
    }
}

handleFetch()

fetch("https://randomuser.me/api").then(function(response){
    let result = response.json()
    return result
}).then(function(response){
    console.log(response)
}).catch(function(response){
    console.log(response)
})