// Immediately Invoked Function (IIFE)

//An IIFE is a JavaScript function that runs as soon as it's defined.

// helps to prevent global scope polution as global variable can be access anywhere so they poullute the files for preventing it we create iife functions 

// global varibale declared in the iife cannot be use outside it but iife functions can use other global variables

//Because it prevents accidental variable leaks into the global scope.

//Before let/const and modern modules, this was one of the best ways to safely isolate code — especially in libraries and big projects.

(function chai() {
    console.log(`db connected`);
})(); // named iife , chai is name of this iife

 // we wraped our function into paranthesis and they put a paranthesis in last for execution

 // note- seimicolon is important as it does not know where to end .


//  ( () => {
//     console.log(`db connected two`);
    
    
//  })(); // here i tried the arrow function but after this i tried it with using a variable 


//  const aurcode =( () => {
//     console.log(`db connected two`);
    
    
//  })(); // iife by using arrow function

  ( (name) => {
    console.log(`my name is ${name}`);
 })('manav');
 

