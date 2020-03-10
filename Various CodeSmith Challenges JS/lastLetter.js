/*
Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.
*/


function lastLetter(word) {
  return word.slice(-1)

}

//Uncomment the lines below to test your code

console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"