    // const tinder = new Object() // it is singleton as we are using constructor

    const tinder ={} 

    tinder.id = "123abc";
    tinder.name = "manav"
    tinder.login = false

    // console.log(tinder);

    const regular ={
        email : "manav@google.com",
        fullname :{
            userfullname :{
                firstname : "manav",
                lastname : "kumar"
            }
        }
    }
    // console.log(regular.fullname); //nesting of objects i possible
    
    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}


    // const obj4 = {obj1,obj2} //it will not merge two objects , one  whole object will act as element like array
    // console.log(obj4); 

    // const obj5 =Object.assign(obj1,obj2) // it will help you to merge two objects, works on target and source one obj will be target and other obj will be sources

    const obj5 = {...obj1,...obj2} // we gonna use spread operator method to merge objects most of the time 
    console.log(obj5); 
    
    const user =[ //we are using objects in array, we created an array and then created objects in it
        {
        id: 1,
        name: "manav@google"
        },
        {
        id: 2,
        name: "manav@google"
        },
        {
        id: 3,
        name: "manav@google"
        },
    
]

user[1].id // way to access objects in array by using index
//user[1] will give me 2nd element which has id =2 as in array indexing starts from 0 

console.log(tinder);
console.log(Object.keys(tinder));

//  u are calling Object.keys() which returns an array of keys. So yes — the returned value is an array, but your original object (tinder) is still just a plain object.


console.log(Object.values(tinder)); // we can fetch values by using it like we fetched keys

console.log(Object.entries(tinder)); // for boths keys and values