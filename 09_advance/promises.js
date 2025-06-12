// the promise object reprsent the eventual completion (or failiure) of an asyn operation and its resulting value
// promises are complete in future like cryptography, file accessing etc
// promises has to be create and the we consume it

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

// async function getuser() { //async tell that asynchronus work is going to come

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
/**
 * the data fetched from the API first lives inside the response object.
 * 
 * ✅ response is the envelope

✅ response.json() opens the envelope and reads the actual content

✅ data is the message inside the envelope — the actual result from the API
 */

/**
 * FETCH INTERNAL WORKING
 * 
 * FETCHING IS DONE IN TWO STEPS
 * 
 * 1.data reserve - to store data - step 1
 * a. onfulfilled[]- resolve
 * b. onrejection[]- reject 
 * both onfulfill and rejection are kind of array but you cant push values in it they are private in nature
 * 
 * 
 * 2.web browser - call api  - step 2
 * it will access web api either node api
 * then it will send network request which is done by using a source like web api or node
 * then 2 conditions will come either network req will go on network or it will not go , if any response has come thrugh req then it will go to full fill and if it will be reject then it will go to on rejection 
 * 
 * NOTE- even the reponse like 404 not find also directed to onfulfilled because it is the response after req is successfull connected to network
 * 
 *  response = fetch('something')
 * 
 * we got function in onfulfilled and on rejected because of network request we will use the function to get data and then data can be store into response and then it is availabe into global memory
 */