const robertSchoolStart = startTime => {
  if (startTime === 'Monday') {
    console.log('Robert starts at 10:40 until 13:40');
  } else if (startTime === 'Tuesday') {
    console.log('Robert starts at 07:00 until 10:40');
  } else if (startTime === 'Wednesday') {
    console.log('Robert starts at 10:40 until 15:00');
  } else if (startTime === 'Thursday') {
    console.log('Robert starts at 09:20 until 13:40');
  } else if (startTime === 'Friday') {
    console.log('Robert starts at 07:00 until 13:40')
  } else {
    console.log('ITS THE WEEKEND');
  }
};

const abbySchoolStart = starts => {
  if (starts === 'Monday' || starts === 'Wednesday' || starts === 'Friday') {
    console.log('Abby starts at 11:30 until 14:20')
  } else if (starts === 'Tuesday' || starts === 'Thursday') {
    console.log('Abby starts at 07:00 until 09:50')
  } else {
    console.log('ITS THE WEEKEND')
  }
};

robertSchoolStart('Monday');
abbySchoolStart('Monday');