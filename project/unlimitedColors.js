let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

let color = null
let set = "0123456789ABCDEF"
let generate = function(){
  let text = "#"
  for(let i=0;i<6;i++){
    let random = Math.floor(Math.random()*16)
    text += set[random]
  }
  return text
}
let intervalId = null
let callGenerator = function(){
  document.body.style.backgroundColor = generate()
}
start.addEventListener("click",()=>{
  if(intervalId === null){
    console.log("Start")
    intervalId = setInterval(callGenerator,1000)
  }
})

stop.addEventListener("click",()=>{
  if(intervalId != null){
    console.log("Stopped")
    clearInterval(intervalId)
    intervalId = null
  }
})