const fun = function(){
    console.log("my name is manav kumar");
    console.log("i am from delhi");

}

// fun()

//IMPORTANT-fun will act as reference in js but when you use brackets () then excution will happen\

function addtwonumbers(number1, number2) {
    // console.log(number1 + number2);
    let result = number1 + number2
    return result
    
}

let value = addtwonumbers(3,4)
// console.log(value);


// what we pass in function while declaration is said to be parameters and while calling it is arguments

//we can store the result of a function into another varaible

// function loginuser(username) {
//     return `${username} just logged in`
// }
// console.log(loginuser("manav"));

function loginuser(username) {
    if(!username)
    {
        console.log("please eneter a username");
        return
        
    }
    else{
        console.log(`${username} just logged in`);
        
    } 
}
// loginuser("")


//REST OPERATOR-...NUM1
//IMPORTANT- REST operator return in from of array 
//rest and spread look alike but the difference is in the use case

function calculator(...num1) {
    return num1
    
}

// console.log(calculator(200,300,400)); //output->  [ 200, 300, 400 ]


// USING OBJECT IN FUNCTION
// here we created an object which elements we used in functions and then we called the fuction 
const user =  {
    username : "manav",
    price : 189
}

function handleobj(anyobject) {
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
//calling a function which refer to object
handleobj(user)

// in last one (user) we created object seperately, we can create an object in function as well like "insideobj({})"


// here we first create an function and then we call the function and made an object , it is efficient to use
function insideobj(anyobj2) {
    console.log(`i am ${anyobj2.name} and i live in ${anyobj2.location}`);
}

insideobj({
    name : "manav",
    location :"delhi"
})

// ARRAY IN FUNCTION
// create an array then make a function and call the function by refering array 
const arr2 = [1,2,3,4,5]

function arrayuser(obj) {
    console.log(arr2[1]);
    
    
}
arrayuser(arr2)

