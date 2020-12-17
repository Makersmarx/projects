// Write a function that will check the string is a palindrome or not.

const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
};

console.log(palindrome('racecar'));
console.log(palindrome('bus'));
