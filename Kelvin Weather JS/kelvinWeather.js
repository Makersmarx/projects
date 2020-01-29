// kelvin temp for todays forcast
const kelvin = 293;
// kelvin temp converted to celsius
let celsius = kelvin - 273;
// fahrenheit temp from kelvin & celsius
let fahrenheit = celsius * (9 / 5) + 32;
//round number to nearest whole
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperture is ${fahrenheit} degrees Fahrenheit`);