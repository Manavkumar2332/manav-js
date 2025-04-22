// SCOPES
//1. global - declare outside the function and can user anywhere in the code

//2. local or block scope - declare inside the fucntion and can only be used in the function

// we dont use var because it does not follow the concept of block scope , the data decalared in var always leak out means even if you declare it in a function the value of var can be use anywhere in the code which is not correct

// curly barces helps to delcare scope

let a = 300

if(true){
    let a=30
    const b= 40
    console.log("inner: ",a);
}

console.log(a);


//IMPORTANT NOTE - // GLOBAL SCOPE IS DIFFERENT IN NODE JS AND DIFFERENT IN BROWSER CONSOLE
//WHY?
//ASN=
 // In the browser, variables declared in the global scope (e.g., using var) 
// are truly global and accessible across all scripts on the same page.
// In Node.js, however, each file is treated as a separate module, 
// so variables declared globally are only scoped to that specific file 
// unless explicitly exported.


//LOOP NESTING
// child function can access elements of parent function
function one() {
     const username = "manav"

     function two() {
        const website = "youtube"
        console.log(username);
        
     }

     //console.log(website);
     
    two()
}

// one()

if(true)
{
    const username = "manav"
    if(true)
    {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); here this is outside the scope
}
// console.log(username); outside the scope


//WAYs to declare function
function addone(num)
{
    return num+1
}
console.log(addone(5));


//console.log(value(4)); if we declare this here then it will show error as function is not made for this till now
const value = function(num)
{
    return num+2
}
console.log(value(4));

