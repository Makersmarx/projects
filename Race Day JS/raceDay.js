let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;

let runnerAge = 25;

if (runnerAge > 18 && runnerEarly === true) {
  console.log(raceNumber += 1000);
} else {
  console.log(raceNumber);
};

if (runnerAge > 18 && runnerEarly === true) {
  console.log(`${raceNumber} will race at 09:30 am.`);
} else if (runnerAge > 18 && runnerEarly === false) {
  console.log(`${raceNumber} will race at 11:00 am`);
} else {
  console.log(`${raceNumber} will race at 12:30 pm.`)
};