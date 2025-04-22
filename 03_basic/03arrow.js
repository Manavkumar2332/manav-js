
// made an object and the make a function in it 

const user ={
    username : "manav",
    price : 999,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);// 'this' → refers to user object
        console.log(this); // talks about current context means uses the element of current scope
        
    }
}
// user.welcomemsg()
// user.username= "harsh"
// user.welcomemsg()

// console.log(this); // it will give you an empty output because in we are working on node js , wherea as if you work on browser console the global object is window , important for interview

//NOTE- WE cant use this in function without using object

// function chai() {
//     let username = "manav"
//     console.log(this.username);
    
// }
// chai() // the output will be undefined as you can use this in function without object


//ARROW FUNCTION
const chai = () => {
    let username = "manav"
    console.log(this.username);
    
}
// chai()


//EXPLICT ARROW FUNCTION -> neet to write return
//  const addtwo = (num1,num2) => {
//     return num1 + num2
//  } basic arrow function


// if you use curly braces then you need to write return other wise you can write it as it is

//IMPLICT ARROW FUNCTION - not need to write return 
// const addtwo = (num1,num2) => num1 + num2

// const addtwo = (num1,num2) => (num1 + num2)
  //its just if you dont use curly barckets you can write the code in normal brackets
 
 const addtwo = (num1,num2) => ({username : "manav"})
 console.log(addtwo(1,2)); //object in arrow function 
 //Brackets for object and normal paranthesis to execute it in arrow function 


