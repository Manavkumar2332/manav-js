const score = 400
// console.log(score);

const balance = new Number(145);
console.log(balance.toString());
 // now it is converted into string and if i'll check its type it will show me string and beside that i can use string operation as well

// console.log(balance.toString().length); 
// // here we used string operation as well 

// console.log(balance.toFixed(2));
// // its output is 145.00

// const value = 1123.856
// console.log(value.toPrecision(4));
// out put will be 1124 as it give us precise value

// const value2 = 1000000
// console.log(value2.toLocaleString());
//provide coma in zeros on the bases of us standard 

// console.log(value2.toLocaleString('en-IN')); 
// this can mark coma on the basis of indian system

// +++++++++++++++ Maths+++++++++++++++++++++++++

console.log(Math.abs(-4));
// convert negative value to positive value

console.log(Math.round(4.6));
// use for round of 

console.log(Math.max(2,3,4,5));
//use to find max number and by using min we can find min number as well

console.log(Math.random());
console.log((Math.random()*10)+1);
// it is use to print random numbers like in ludo

console.log(Math.floor(Math.random()*10)+1);
// by using this number will always be greator then 0
// we add one as floor can give zero sometimes , to avoid that we added zero
// it will give value from 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+min);
// through this method we decide tha range and we want greator than 10 so we add min value in it, now it will show value from between 10 to 20






