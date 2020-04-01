/*
Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.
*/

let countDown = 10;

for (let i = countDown; i >= 0; i--) {

  countDown = i;
}

console.log(countDown) // -> should print 0;