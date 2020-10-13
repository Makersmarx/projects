// Remove vowels from passed arg

// use for loop regex & flags  - g flag finds all matches within string & - i flag ignores case

// return new string using replace

const disemvowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    return str.replace(/[aeiou]/gi, '');
  }
};

console.log(disemvowel('I love to test AEIOU '));
console.log(disemvowel('BANANA'));
console.log(disemvowel('hello world'));
