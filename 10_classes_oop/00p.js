//Object literals are the basics objects


const user ={
    username: "manav",
    logincount : 6,
    signedin: true,

   

    // When a function goes into the call stack, and we want to use something from outside the function, we need to tell what it belongs to — and that’s why we use this.

     // Method: function inside object to print user's username
    getuser : function()
    {
        // console.log("hey bro");
        // 'this' refers to the current object 'user'
        // console.log(`username :${this.username}`); // function ke bhar se kuch chaiye tha isliye this likhna padha

        // console.log(this); // it will give you all the elements of the object
        
        
        
    }
}

// console.log(user.username);// Outputs: manav
// console.log((user.getuser())); // Outputs: username: manav
// console.log(this);// it will give us empty parenthesis {} as we are writting it node js but if you write it in your browser console it will give the window


//********CONSTRUTOR FUNCTION******* */

// const promiseone = new Promise() // new will help you to make multiple instance for an object 
//eg - if you made an object user and then want other user you dont need to create different object you can create an other instance to use that single object for other user

function user1(username,logincount,isloggedin){
    this.username = username; // here we used is to tell the variable and other username is too pass value , don't be confuse by this they both are different
    this.logincount = logincount;
    this.isloggedin= isloggedin;
    return this
}

const userone = new user1("manav",12,true)
const usertwo = new user1("harsh",10,false)
console.log(userone);// it will print harsh and so on as the usertwo overright the value to stop it we will use new

// constructor hels you to give new instance like here we used new
// just after wrtting new we will get a new instance and then we pushed the value into new instance