//REDUCE 
//"reduce() processes an array and returns a single accumulated result."

const mynums = [1,2,3]

const value = mynums.reduce(function (acc,curval)
{  
    // console.log(`acc ${acc} curval ${curval}`); // it is just to show current value and accumulator value

   return acc + curval
},0) // zero is use as intial value as accumumlator does not know where to start from

// console.log(value);

// ARROW FUNCTION REDUCE

// const value2 = mynums.reduce((acc,curval) => {return acc+curval},0)
// console.log(value2);

//acc stands for accumulator which need intialization so we intialize it by using zero and then the value we get by acc + curval will be new value for accumulator

// it is used to sum the bill of cart items 

//reduce give you the total result of many items

//Example

const shoppingcart = [
    {
        coursename : "js",
        price : 1999
    },
    {
        coursename : "py",
        price : 999
    },
    {
        coursename : "java",
        price : 3999
    }

]

const mytotal = shoppingcart.reduce((acc,item) => acc + item.price ,0)
console.log(mytotal);
