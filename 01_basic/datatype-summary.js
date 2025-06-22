// there are two types of datatype in js
//1.primitive
//2. non primitive
// on the basis of data storing and accessing we differentiate datatypes into two

// Primitve- call by value data types it means that we don't have the actual value we have a copy

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

// Non Primitive - call by reference data types, we can allocate refernce of value , here we work on actual value

// Array, objects, functions

//Javascript is a dynamic language. In JavaScript, the type of a variable is checked during runtime, as opposed to static languages where types are checked during compilation. 

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber = 12345682374827n // it was number type but after using 'n' it becomers Bigint

// non primitive

const heros = ["manav","aditya","akash"];

console.log(heros);
console.log(typeof heros);// output will be object

let myobj ={
    name : "manav",
    age : 22,
}
console.log(myobj);
console.log(typeof myobj);//output will be object 

// +++++++++++++++++++++++++++++++++++

// stack(primitive) , Heap(non primitive)

let myname = "manav"

let anname = myname
anname = "harsh"

console.log(myname);
console.log(anname);// here we used a copy so there will be no change in the original one

let userone = {
    email : "manav@google.com",
    upi : "user@ybl"
}

let usertwo = userone

usertwo.email ="harsh@gmail.com" // its how we acces elements of an object by  using dot

console.log(userone.email);
console.log(usertwo.email); // here we used the reference so it will work with original value , change in one email effect on the other 
 // output -harsh@gmail.com
//harsh@gmail.com

//******************************** to inherit properties from one object to other**************************

// let usertwo = { ...userone };  // makes a shallow copy

// usertwo.email = "harsh@gmail.com";

// console.log(userone.email); // ➝ manav@google.com ✅
// console.log(usertwo.email); // ➝ harsh@gmail.com ✅

