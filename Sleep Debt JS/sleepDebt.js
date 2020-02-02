const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 12;
  } else if (day === 'sunday') {
    return 10;
  } else {
    return 'YOU HAVENT SLEPT!';
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();


  if (actualSleepHours === idealSleepHours) {
    return 'You got the correct amount of sleep'
  } else if (actualSleepHours > idealSleepHours) {
    return 'Get outta bed bum'
  } else if (actualSleepHours < idealSleepHours) {
    return 'You need rest'
  } else {
    return 'Where have you been?'
  }
};
console.log(calculateSleepDebt());