//generate a random color

const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * the hex value range is from 0 to 9 and then a refer to 11 and soo on till f that's y we took string till f which is 16 in total
 * we used color variable to give # to the value
 * we run the loop 6 times as the color values are of 6 digits
 * then we push them into color where already # is present where we multipy the value from 16 to get value between 0 to 15 in table you can see we got 0.69 which we multiplied by 16 to get 11 which is B 
 * floor gives you an integer value 
 * then we just return it
 * 
 */

/**
 * // Iteration | Random     | Index | Char | Color
//    0      | 0.69       | 11    |  B   | #B
//    1      | 0.12       | 1     |  1   | #B1
//    2      | 0.94       | 15    |  F   | #B1F
//    3      | 0.48       | 7     |  7   | #B1F7
//    4      | 0.05       | 0     |  0   | #B1F70
//    5      | 0.31       | 4     |  4   | #B1F704

 */
let intervalid;
const startchange = function () {
  intervalid = setInterval(changebg, 1000);
  function changebg() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchange = function () {
  clearInterval(intervalid);
 
};

document.querySelector('#start').addEventListener('click', startchange);

document
  .querySelector('#stop')
  .addEventListener('click', stopchange);
