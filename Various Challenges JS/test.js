const copyArrayAndManipulate = (array, instructions) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]))
  }
  return output
}

const multiplyByTwo = input => {
  return input * 2;

}

const divideByTwo = input => {
  return input / 2;
}


let result = copyArrayAndManipulate([1, 2, 3], divideByTwo)

console.log(result)

const array1 = ['a', 'b', 'c'];
const array2 = [1, 4, 5, 7, 9]

for (const num of array2) {
  console.log(num)
}

for (const element of array1) {
  console.log(element);
}




const myString = 'I love programming';

/*
Create a function 'charCount' that takes two arguments (the first argument is a single character) and
returns the number of times the character is found in the second argument.
For example, charCount('i', 'Codesmith') should return the number 1
*/
const charCount = (arg1, arg2) => {
  let count = 0
  for (let i = 0; i < arg2.length; i++) {
    if (arg1 === arg2[i]) {
      count++
    }
  }
  return count
}


/*
Check that your 'charCount' function is working correctly by passing the string 'o' as the first argument
and your variable 'myString' as the second argument to the 'charCount' function
*/
charCount('o', myString)


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

// function that will have a string and return boolean

// const isPalindrome = str => {
//   const reverse = str.split('').reverse().join('')
//   if(str === reverse){
//     return true;
//   }
//   return false;
// }
function isPalindrome(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
    console.log(newString)
  }
  return newString === string;
}

console.log(isPalindrome('false'))


function calculateTaxes(price, quantity) {
  var salesTax = .10;
  var totalPrice;
  // Only change code below this line
  var preTax = price * quantity;
  console.log(preTax)
  var withTax = preTax * salesTax;
  console.log(withTax)
  totalPrice = preTax + withTax;

  // Only change code above this line
  return totalPrice;
}

// Change the inputs below to test your code

console.log(calculateTaxes(2, 6));