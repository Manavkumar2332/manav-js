const marvel = ["thor", "hulk", "spiderman"]
const dc = ["flash", "superman", "batman"]

// marvel.push(dc) push can add an array to another array
// console.log(marvel); // Output: [ 'thor', 'hulk', 'spiderman', [ 'flash', 'superman', 'batman' ] ]
// console.log(marvel[3]); // Output: [ 'flash', 'superman', 'batman' ]
// console.log(marvel[3][0]); // Output: flash

// ******************************************************************************

//NOTE- PUSH  works on existing array 
// 1. Array Methods

console.log(marvel.concat(dc)); // Output: [ 'thor', 'hulk', 'spiderman', 'flash', 'superman', 'batman' ] concat helps to join two arrays

//NOTE- concat return a new array , it means you need to assign a new variable to hold its values

//SPREAD OPERATOR
const allheros = [...marvel,...dc]
console.log(allheros); // Output: [ 'thor', 'hulk', 'spiderman', 'flash', 'superman', 'batman' ] spread operator helps to join two arrays
//NOTE- spread operator also return a new array , it means you need to assign a new variable to hold its values
//NOTE- spread operator is also used to copy an array  

const arr2 = [1,2,3,[4,5,6,],7,[8,9,[3,5,6]]]
const arr3 = arr2.flat(Infinity) // Flatten nested arrays (i.e., convert them into a single-level array)
console.log(arr3);

console.log(Array.isArray("manav")); // Array.isArray() is not for checking if a value is inside an array — it checks if the value itself is an array.

console.log(Array.from("manav")); // can convert anything into array

console.log(Array.from({name: "manav"})); //Array.from() can't be used on plain objects like { name: "manav" } — because objects are not iterable by default.

let score1 = 101
let score2 = 102
let score3 = 103
console.log(Array.of(score1,score2,score3)); // of is use to make array of individual elements





