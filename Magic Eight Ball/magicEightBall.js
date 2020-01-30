let userName = '';

if (userName) {
  console.log(`Hello ${userName}!`);
} else {
  console.log('Hello!')
}

let userQuestion = 'Will it rain tomorrow?';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'I would run if I was you';
    break;
}

console.log(eightBall);