const coding = ["java","python","ruby","cpp"]

 const value = coding.forEach((item) => {
    // console.log(item);
    
})

console.log(value); // output will be undefined as FOREACH loop does not return anything

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const value1 = mynums.filter((nums) => nums>4) //filter returns a new array containing elements that meet the condition (nums > 4 in this case).

// console.log(value1);

const value2 = mynums.filter((nums) => { // if we open the scope in arrow function we need to use return 
    return nums > 4
})

// console.log(value2);

// const value3 = mynums.map((num) => num +10) // map also returns a new array
// console.log(value3);

//Use **map()** → when you want to change or transform each item.

// Use **filter()** → when you want to keep only some items.

//CHAINING METHOD - to use different methods in one place 

const mynums1 = [1,2,3,4,5,6,7,8,9,10]

const value4 = mynums1.map((num2) => num2 *10). // here we use map into map and then filter
map((num2) => num2 +1).
filter((num2) => num2>=40)

console.log(value4);

// basic difference between for each and map
//1. for each runs a function on each item where as map use to transform each item
//2. for each returns nothing where as map return a new array
//3. chain method can't be use in foreach where we can use chain method in maps


