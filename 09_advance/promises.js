// the promise object reprsent the eventual completion (or failiure) of an asyn operation and its resulting value
// promises are complete in future like cryptography, file accessing etc

/**
 * 📦 Think of it like this:
“Hey JavaScript, I’m doing something that will take time (like calling an API).
I promise to give you the result later.”
 */

/**
 * it has 3 states
 * 1.pending: initial state, neither fulfilled nor rejected.
 * 
 * 2. fulfilled: meaning that the operation was completed successfully.
 * 
 * 3. rejected: meaning that the operation failed.
 */

// promises are object

//before promises=  Yes — before native Promises were built into JavaScript (ES6, in 2015), developers used libraries to handle asynchronous operations more cleanly than nested callbacks. libraries like Q.js and blue bird

const promiseone = new Promise(function(resolve,reject){ // we created a promise here which has to things resolve and reject
    //do an asyn task
    //DB calls
    setTimeout(() => {
        console.log('async task is completed');
        resolve() // to connect the resolve with then you need to write this
        
    }, 1000);

})

promiseone.then(function(){
    console.log("promise consumed");
    
}) // then is  connected to resolve


//OTHER METHOD (SYNTAX0)
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()

        
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

// Promise 3

const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", email : "chai@exmaple.com"}) // parameter used in resolve can be used by then 
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})

// 4th Promise
// in this promise we used chaining so it imporatant and we also learned here about catch

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username : "manav",password :"123"})
        }  
        else{
            reject('error :something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((myusername)=>{ // it is called chaining phele wale then se jo ayega vhi dusre then mai jayega
    console.log(myusername);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is resolved either rejected");   
})


//Promise 5
// here we learned async await , it is not neseccary to use then we can use asyn await as well but remember this that to handle error you need a try catch block
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : "manav",password :"123"})
        }  
        else{
            reject('error : javascript went wrong')
        }
    },1000)
})

async function consumepromisefive() {
   try {
    const response = await promisefive
   console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
   
}
consumepromisefive()

//api req using async await

// async function getuser() {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
        

//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }
// getuser()

// *****API call by using then****

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);

})
.catch((error)=>console.log(error));
