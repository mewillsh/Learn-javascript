// What is IIFE : IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that is executed as soon as it is defined. It is commonly used to avoid polluting the global 
// namespace or to create a private scope for variables.

// ()() first paranthesis is defination and second is execution 

(function funName(){
    console.log("DB Connected")
})();

(()=>{
    console.log("DB Connected")
})();

((name)=>{
    console.log(`Connected to DB by ${name}`)
})("Sheetal")

