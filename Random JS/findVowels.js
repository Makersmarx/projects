// write a function that takes a string as an argument and returns the number of vowels contained in that string.

const findVowels = (str) => {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    // console.log(str[char]);
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(findVowels('heLLO'));
console.log(findVowels('bbbb'));
