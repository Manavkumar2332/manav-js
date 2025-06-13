// if you need to access anything in the function within object you neeed to use this 
 
// PROTOTYPE - A prototype is just an object that other objects can use to share properties and methods.

// for eg 

let heros = {
    thor: "hammer",
    spiderman : "sling",

    getspider:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

heros.hitesh()



/**This means:

You're adding a custom method called hitesh() to Object.prototype

Now every object in JavaScript (including heros) can access this method — even if it's not directly defined inside them.
 */

/**
 * prototype se hum apna khud ka method bna kr usey dusre objects ke sath call kr skte hai chaye humne uss method ko object mai declare na kiya ho 
 */

/**
 * function, array string => objects=> null
 */

/********using prototype by array******* */


let myheros = ["hulk","superman"]

myheros.hitesh() // so this method shows that if you declare some method by using in object then you can use it in array too 

/*****now we are trying to check if we give powers to array then it will be present in object or not as we know if we gave powers to object function , string , array will get it are prototype checkes from method(func,array,string) to object untill it found null */

Array.prototype.manav = function(){
    console.log("hey my name is manav");
    
}
myheros.manav() // so the object we created for array can be use by array 
// heros.manav() // but the object we created for array can't be use by object so it means that the method declare in array by using prototype can't be access by object
// only array got power not function and string 

/**function ===
 *             ||
 *  array ========> object =====> null
 *             ||
 * string======
 *  */ 
   

/**PROTOTYPAL INHERITANCE */

const teacher ={
    name:"manav"
}

const teaching = {
    lastname: "kumar",
    
    
    
}

const classes = {
    makeassignment :"js make",
    
    
    __proto__: teaching // HERE  we used inheritence by using proto i can use use the object of one class to other
}

// console.log(classes.makeassignment);
// console.log(classes.lastname);


//********modern syntax for inheritance********* */

Object.setPrototypeOf(teacher,teaching)// teacher inherited properties of teaching 

console.log(teacher.lastname);


// true length wali baat 

let anothername = "manav    "

String.prototype.truelength = function(){
    console.log(`true length is : ${this.trim().length}`);
    
}

anothername.truelength() // by wrtting anothername with truelength the keyword 'this' will able to use another name as context in true lenght function , so now your this from true length is refering to anothername