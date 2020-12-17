// remove duplicates from string

const unique = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
};

console.log(unique('abcdab'));
console.log(unique('aaabbc'));

// const removeDuplicate = (arr) => {
//   let result = [...new Set(arr)];
//   return result;
// };

// console.log(removeDuplicate('abcdab'));
// console.log(removeDuplicate('aaabbc'));
