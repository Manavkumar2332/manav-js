const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


// we need something which run this console command on intervals so for that we use set interval
setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()// we pushed the text into clock which helps to dispaly message
},1000) // 1000 mili seconds , we gave time at which function run itself