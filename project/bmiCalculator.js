//https://stackblitz.com/edit/dom-project-chaiaurcode

let form = document.querySelector("form");
let result = document.querySelector("#results");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  let height = parseInt(form.height.value);
  let weight = parseInt(form.weight.value);
  if(isNaN(height) || height<=0 || isNaN(weight) || weight<=0){
    result.innerHTML="<p>Given Input is Invalid</p>"
  }
  let calulation = weight / ((height/100)**2)
  let message = ''
  if(calulation>=25){
    message = "You are Overweight"
  }
  else if(calulation>=18.6 && calulation<=24.9){
    message = "You are Normal"
  }
  else{
    message = "Your are Underweight"
  }
  result.innerHTML = `<p>${message} with BMI ${calulation.toPrecision(3)}</p>`
})