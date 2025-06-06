const form = document.querySelector('form')

// this usecase will give you empty value
// const height =parseInt(document.querySelector('#height').value) 

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height =parseInt(document.querySelector('#height').value) //the value we got from this is in form of string to convert it into number we use parseint
  // We use parseInt() to convert those string inputs into numbers so we can do calculations.
  // But results is not an input — it’s just a <div> where we want to show the output.
  const weight =parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')
  // we use OR because agar ek bhi condition true hui tho curly braces ke andr mt jana

  //and operator kun nai use kiya uska reason -All three must be true at the same time to show the error which is almost impossible
  
  if(height==='' || height<0 || isNaN(height))
  {
    results.innerHTML =`Please give a valid height ${height}` //yha koi bhi condition true hui jo ki nai honi chaiye tho error show krega or sath mai value bhi dikhayega jo tumne dali thi so that user smjh ske usne kya galti ki thi
  }
  else if(weight==='' || weight<0 || isNaN(weight))
  {
    results.innerHTML =`Please give a valid weight ${weight}`
  }
  
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi>25)
    {
      results.innerHTML = `<span>over weight ${bmi}</span>`
    }
    elseif(bmi<18.625 && bmi<25)
    {
      results.innerHTML = `<span>normal range ${bmi}</span>`
    }
    elseif(bmi<18.6)
    {
      results.innerHTML = `<span>under weight ${bmi}</span>`
    }
    
  }
  
});

//So why do we use innerHTML?
// We use .innerHTML when we want to display something to the user.

// It does not store value in a variable — it puts value inside an HTML element (like a <div>, <p>, etc.)

