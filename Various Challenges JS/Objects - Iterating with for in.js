/*
You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.
*/


const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let obj in checkObj) {
  if (checkObj[obj] >= 2) {
    objToArray.push(checkObj[obj])
  }
}

console.log(objToArray)