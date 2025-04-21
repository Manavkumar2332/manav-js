// in this we gonna learn about object destructure

const course ={
    coursename : "js in hindi",
    price : 99,
    courseinstructor :"hitesh"
}

console.log(course.courseinstructor); // nomally we call element of object

// another method
 
// this method is object destructure

const {courseinstructor : instructor,price} = course // in this we are taking elements from course and giving them other name as instructor , we don't need to write "course." again and again by using this way you can simple write in one line and then call them by console log

// note- instructor is just another name given to courseinstr as it was long
console.log(instructor);
console.log(price);


