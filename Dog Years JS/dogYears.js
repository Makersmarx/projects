// human age
const myAge = 30;
// early years
let earlyYears = 2;
earlyYears *= 10.5;
// later years
let laterYears = myAge - 2;
// dog years accounted for by laterYears
laterYears *= 4;

// early and later years combined
let myAgeInDogYears = earlyYears + laterYears;

// my name in lowerCase
const myName = 'makers'.toLowerCase();

// human age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`);