//FOREACH loop for arrays

// if you dont want to use break or continue in loop then go for FOR EACH loop , if you'll use it then for FOROF

// const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {

//     // console.log(item);
    
    
// })

// coding.forEach((item, index , arr) => { // it is the whole syntex and the parameters you can use 
//     // console.log(item, index, arr);
    
// });


// values we get from db is in form of array so we need to learn how for each works 


//here we made and array in which we put 3 objects and then access them by using for each loop
const mycoding = [
    {
       languageName : "javascript",
       languageFileName :"js" 
    },
    {
       languageName : "python",
       languageFileName :"py" 
    },
    {
       languageName : "ruby",
       languageFileName :"rb"  
    },
    
]

mycoding.forEach((value) => // every object is named as vlaue now 
{
console.log(value.languageFileName);

});