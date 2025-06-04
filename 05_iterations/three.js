//FOR OF loop

// const arr = [1,2,3,4,5,6]

// for (const value of arr) {  
//     console.log(value);
    
// }

//value is like i in loops so you can name it whatever you want 
// FOR OF loops work on every iteratable thing like string , array 

const greetings = "hello world"

for (const greet of greetings) {
    
    // console.log(greet);
    
}


//MAPS

const map = new Map()

map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"france")

// console.log(map);

//for of loop on maps

for (const element of map) {

    // console.log(element); // this will print in the form of array , to avoid it we will use other method
    
    
}

for (const [key,value] of map) {

    // console.log(key,"-", value); // this will print it normally
    
    
}

//we can't use forof loop on objects


//loops for object [FOR IN]

const myobject = {
    js : 'javascript',
    cpp : 'c++'

}

for (const key in myobject) {
    // console.log(myobject[key]); //through this method u can ask for value of key and if you write simple key in console log you'll only get key like jss and cpp not its value
        
    }


    //FORIN loop in array

    const arr = ["cpp","java","python","js"]

    for (const key in arr) {
        // console.log(key); //output will be 0,1,2,3 as the key of array is in numbers 
        console.log(arr[key]);
        
        }
    

// when you use forof loop in array it will give you simple the values but if you use forin loop you need to write the syntax differently to get value 

// we cant iterate maps by using forin loop but it has other methods like forof




