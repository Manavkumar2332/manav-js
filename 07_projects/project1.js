//  https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css

// COLOR CHANGING BLOCKS
 
 const buttons = document.querySelectorAll('.button') //we select all the buttons so that we can use loop on it
 const body = document.querySelector("body") // we used body because we want to change the background colour which reuires body

 buttons.forEach(function (button){ //we got a node list by queryselector due to which we are able to use for each on it
   console.log(button);
   button.addEventListener('click', function(e) // eventlistener will help you to add actions 
   {
     console.log(e)
     console.log(e.target) //even the event listener is on the whole loop or button , target can tell you which element you clicked
     if(e.target.id === 'grey'){
       body.style.backgroundColor ='grey' // here we checked the target id if its grey then change its background colour
     }
     if(e.target.id === 'white'){
       body.style.backgroundColor ='white'
     }
     if(e.target.id === 'blue'){
       body.style.backgroundColor ='blue'
     }
     if(e.target.id === 'yellow'){
       body.style.backgroundColor ='yellow'
     }
   })
 })