/* Random Fact Generator JS practice for Codecadmey class */

let factOne = [
  'Banging your head against a wall for one hour burns 150 calories.',
];
let factTwo = ['In Switzerland it is illegal to own just one guinea pig.'];
let factThree = ['Pteronophobia is the fear of being tickled by feathers.'];
let factFour = ['Snakes can help predict earthquakes.'];
let factFive = ['Crows can hold grudges against specific individual people.'];
let factSix = [
  'The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.',
];
let factSeven = [
  'So far, two diseases have successfully been eradicated: smallpox and rinderpest.',
];

let arrays = [
  factOne,
  factTwo,
  factThree,
  factFour,
  factFive,
  factSix,
  factSeven,
];

let randomFact = arrays[Math.floor(Math.random() * arrays.length)];

console.log(randomFact);
