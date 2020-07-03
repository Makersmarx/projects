/* const languages = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}


function greet(str) {
  for (let i in languages) {
    if (i === str) {
      return languages[i]
    }
  }
  return 'Welcome'
}
console.log(greet('elsh'))
*/

"date": "2015-04-30",
"txVolume(USD)": 239909582.364,
"txCount": 111099,
"marketcap(USD)": 3183860000,
"price(USD)": 225.69,
"exchangeVolume(USD)": 33818600,
"generatedCoins": 3200,
"fees": 16.08550077,
"activeAddresses": null
}
]

//console.log(typeof bitcoinData);
let dateKey = 'date';
for (let el of bitcoinData) {
  //if (el[dateKey] == "2013-05-01") console.log(el);
}
let priceKey = "price(USD)";
let newArrbit = [];
const array = bitcoinData.map(el => {
  newArrbit.push(el[dateKey])
  newArrbit.push(el[priceKey])
})
//console.log(newArrbit)

let exchangeVol = "exchangeVolume(USD)";
const day = [];
bitcoinData.filter(el => {
  el[exchangeVol] === 0;
  day.push(el);
});
//console.log(day);
let newKey = "generatedCoins";
const bitGen = bitcoinData.reduce((a, currVal) => a + currVal[newKey], 0);
//console.log(bitGen)

const daysOver100 = bitcoinData.filter(el => el[priceKey] > 100).length;
//console.log(daysOver100);

let avgKey = "fees"
const avgBit = Math.floor(bitcoinData.reduce((a, c) => a + c[avgKey], 0));
//console.log(avgBit)


function dayMapper(arr, prop1, prop2) {
  let mapper = [];
  arr.map(el => {
    mapper.push({
      prop1: el[prop1],
      prop2: el[prop2]
    })
  });
  return mapper;
}

let p1 = 'fees';
let p2 = 'date';
//console.log(dayMapper(bitcoinData,p1,p2));

function averageValueOf(arr, prop) {
  const newerData = arr.reduce((a, c, ) => a + c[prop], 0) / arr.length
  return newerData
}
//console.log(averageValueOf(bitcoinData, p1))

function generalAverageValue(arr, property) {
  let average = 0;
  if (typeof arr[0][property] == 'number') {
    average = Math.floor(arr.reduce((a, c, ) => a + c[property], 0) / arr.length);
    return [property, average]
  } else throw new Error('Not');
}

//console.log(generalAverageValue(bitcoinData, p1))

const priceRangeTally = arr => {
  let emptyBit = [];
  let key = "price(USD)";
  let tally = [0, 0];

  for (let obj of arr) {
    emptyBit.push(obj[key])
  }
  let max = parseInt(Math.max(...emptyBit));
  let min = parseInt(Math.min(...emptyBit));

  for (let obj of arr) {
    if (obj[key] >= 68 && obj[key] <= 500) {
      tally[0]++;
    } else {
      tally[1]++;
    }
  }
  //console.log(`${tally[0]} days had a price between $68 and $500. ${tally[1]} days had a price between $501 and $1152.`);
  // console.log(tally[0]);
  // console.log(tally[1]);
  //return emptyBit;
  // let madeMoney = []
  // let lostMoney = []
}
priceRangeTally(bitcoinData);
// 68 - 500
// 501 - 1152

const almostThere = arr => {
  let maxObj = {};
  let minObj = {};
  for (let key in arr[0]) {
    if (typeof arr[0][key] === 'number')
      maxObj[key] = 0;
  }
  const arrayOfKeys = Object.keys(maxObj);
  console.log(arrayOfKeys);
  //for (let obj of arr){
  arrayOfKeys.forEach(key => {
    let temp = 0;
    let temp2 = Infinity;
    for (let obj of arr) {
      temp = Math.max(temp, obj[key]);
      temp2 = Math.min(temp2, obj[key]);
    }
    maxObj[key] = temp;
    minObj[key] = temp2;
  });

  function compare(min, max) {
    let object = {};
    for (let key in min) {
      object[key] = 0;
    }
    cn
  }
}

almostThere(bitcoinData)