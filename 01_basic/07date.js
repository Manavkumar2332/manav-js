// dates

let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate); // type of date is object

let mycreateddate = new Date(2025, 0 , 23,5 ,3) // months are start from zero in js
console.log(mycreateddate);
console.log(mycreateddate.toString()); // we can't read dateso we learn methods by converting them into string we can see the dates in our language

console.log(mycreateddate.toLocaleString()); // we can provide more info like exact time 

let newdate = Date.now()
console.log(newdate); // this will give you time in mili sec from the date written on ect paper 

console.log(mycreateddate.getTime()); // we can compare both times which is help full in hotel bookings

console.log(Math.floor(Date.now()/1000)); // thorugh this we can convert it into seconds , always use floor or round method in this case

let newdate1 = new Date()
console.log(newdate1.getDay()); // through this method we can find specific day, date, time and other things, giving us day which 3rd of this week so don't be confuse, todaye is wed

newdate1.toLocaleString('default',{
weekday:"long"

}) // thorugh this method we can customize other methods in local string and can make the method suitable to our need





