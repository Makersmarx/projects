/* write a function canConstruct(target, wordBank) that accepts a target string and an array of strings. This function should return a boolean indicating whether or not the target can be constructed from the elements of wordBank */

const canConstruct = (target, wordBank) => {
  if (target === '') {
    return true;
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 'ska', 'sk', 'boar'])
);
