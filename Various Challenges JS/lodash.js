/* Codecademy JS practice project 
In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library. You will be implementing ten methods that add new functionality for numbers, strings, objects, and arrays.

In implementing each method, we will follow these four steps:

    Specify the functionality of the method we are implementing
    Ideate a game plan for how to implement this functionality in code
    Implement our game plan
    Test our code to ensure it works as expected
*/
const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isRange = number >= start && number < end;
    return isRange;
  },
};
