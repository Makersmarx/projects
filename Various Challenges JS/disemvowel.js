function disemvowel(string) {
  // your code here...
  for (let i = 0; i < string.length; i++) {
    return string.replace(/[aeiou]/gi, '');
  }
}

//Comment below to test your function:

console.log(disemvowel('I love to test of AEIOU '));
console.log(disemvowel('BANANA'));
console.log(disemvowel('hello world'));