const revString = str => {
  let newS = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newS += str[i];

  }
  return newS
}

console.log(revString('Test Test Hello World'))

/* OR

const reWord = backW => {
 return backW.split('').reverse().join('');
}
console.log(reWord('hello world'));
*/

const reWord = backW => {
  return backW.split('').reverse().join('');
}
console.log(reWord('hello world'));


const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];