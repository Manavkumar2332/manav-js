// Array

//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// IMPORTANT POINTS
/*

1. JavaScript arrays are resizable and can contain a mix of different data types.

2.JavaScript arrays are not associative arrays and so, array elements can only access by non negative numbers 

3.JavaScript array-copy operations create shallow copies. it means the values in array refers to the same point so change in copies will change the actual value

*/

let myarr = [5,6,3,4,8] // first method to declare array

let myheros =["manav","harsh", "yash"]

let myarr2 = new Array(1,2,3,4) // second method to delcare in array in which don't use square bracket

// console.log(myheros);
// console.log(typeof myheros);

// Array methods

// myarr.push(0) // we can add value by this
// myarr.pop() // it will remove the last value
// myarr.unshift(9) it will add 9 in starting like push
// myarr.shift() same like pop but it remove elements from front

// console.log(myarr);

// console.log(myarr.includes(9)); it checks the value is present in array or not

// console.log(myarr.includes(3)); do the same

// console.log(myarr.indexOf(3)); we can check index of the element


 //ARRAY TO STRING

// const newarr = myarr.join() // convert the array into string

// console.log(myarr); 
// console.log(newarr); elements will be same but the array is converted into string by using join

// console.log(typeof newarr); // through this we can confrm that the array is converted into string and then we can use string operation as well

//SLICE AND SPLICE

let manavarray = [0,1,2,3,4,5,6]

console.log(manavarray.slice(1,3)); // it includes 1 but not 3 so the output will be 1,2
console.log(manavarray);


let manavarray2 = [0,1,2,3,4,5,6]


// NOTE - the difference between slice and splice is that splice manipulate the original array , after using splice the array doesn't show value that removed by using splice

//2. second difference is that splice includes the second range as well like in example output is 1,2,3 so it includes 3 as well which is not present in slice

console.log(manavarray2.splice(1,3));
console.log(manavarray2); 













