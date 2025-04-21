// An object can be creat by using 2 methods 
//1. literals
//2. constructor

// singleton is made by using constructor

//object literals

const obj = {
    name: "manav" ,
    "fullname" : "kumar",

    age:21,
    location: "goa"
}
console.log(obj.age); // its how we use elements of an object
console.log(obj.name);

console.log(obj["fullname"]) // this is how we can access other element in same heading, we can't access it by using dot

const mysym = Symbol("key1")// symbols are the unique
const obj2 ={
    names : "harsh",
    [mysym] : "mykey1",
}
console.log(typeof obj2[mysym]);// mykey1 will be the output

// NOTE FOR SYMBOLS 
// here key1 is a label , if you want to access the value you can use it by variable name 
// 2 symbols can have same label but they are unique in nature

obj.name ="yash"
// Object.freeze(obj) // it will freeze the elements of object , it means you can't change them now 
// console.log(obj);

obj.name="kalu"
console.log(obj); // i tried here by changing name but because of freez i was not able to change it

// console.log(obj2); // used this check wheather symbol is showing or not

obj.greeting = function(){ // it's how object function is made 
    console.log("hello js user"); 
}
console.log(obj.greeting()); // calling the function
console.log(obj); // thorugh this you can see greeting is part of object and it works as function as well


obj.greetingtwo = function()
{
    console.log(`hello js user, ${this.name}`);
    
}
console.log(obj.greetingtwo());

//NOTE -Functions stored in objects are called methods.

// You can access them using dot notation like obj.greeting().

// Inside such methods, you can even use "this" to refer to other properties of the object.







