/*
Create a function addS that accepts a string, and returns the string with an "s" added to the end.
*/


const addS = myString => {
  return myString + 's'
}


console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'