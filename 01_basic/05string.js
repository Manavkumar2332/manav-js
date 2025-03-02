 let name ="manav"
 let repcount = 50

//  console.log(name + repcount + " value");

// console.log(`my name is ${name.toUpperCase()} and my repcount is ${repcount}`); // `` these are called backticks which is used to print string in a more efficient way and you can use the variable to print value , beside that we can use other operations like uppercase in this method as well


 const gamename = new String("hello-manav-bro");
//  console.log(gamename);
//  console.log(gamename[1]);
//  console.log(gamename.length);
//  console.log(gamename.toUpperCase());   // because of these operations there will be no change in origonal value
//  console.log(gamename.charAt(2));
//  console.log(gamename.indexOf('e'));

 console.log(gamename.substring(2,4));
 console.log(gamename.slice(0,7)); // we can use negative values in slice 
  
 // note - both slice and substring are same but the major difference is how they handle negative values

 const myname = "  sunday   "
 console.log(myname.trim()); // trim is used to terminate white spaces and line terminators

 const url = "manavkum23@ gmail -%20.com"
 console.log(url.replace('%20','-'));
 console.log(url.includes('manav'));
 console.log(url.split(' '));
 
 
 
 
 
 
 
 
 
 
 