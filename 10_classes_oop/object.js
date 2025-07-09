function multipyby5 (num){
    return num*5
}
multipyby5.power=2
// function is function as well as object

 console.log(multipyby5(5));
 console.log(multipyby5.power); // we added property by using dot to show that a function is a object as uk object elements can be access by dot only
 console.log(multipyby5.prototype);//Every function gets a prototype object by default


 //CONSTRUTOR FUNCTION
 function createuser(username,score){
    this.username = username
    this.score= score
 }

 createuser.prototype.increment = function(){
    this.score++
 }
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}
 const chai = new createuser("chai",25)
 const tea = new createuser("tea",20)

 chai.printme()
 tea.printme()
/**
 * ✅ First new creates an empty object,
✅ then this refers to that object, and the score present in chai is refferd whe this.score++ is written 
✅ and finally that object is returned automatically.
 */
 
 
 
