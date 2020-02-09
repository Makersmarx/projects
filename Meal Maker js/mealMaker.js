const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    return this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    return this._courses.mains = mains;
  },
  set appetizers(desserts) {
    return this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomNumber = Math.floor(Math.random() * dishes.length);
    return dishes[randomNumber];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your appetizer is ${ appetizer.name }, your mains ${ main.name } and your dessert is ${ dessert.name }.The total price is ${ totalPrice }`;
  }
};
menu.addDishToCourse('appetizers', 'bread', 2.50)
menu.addDishToCourse('appetizers', 'fried pickles', 2.50)
menu.addDishToCourse('appetizers', 'wings', 3.50)
menu.addDishToCourse('mains', 'cheesburger', 4.50)
menu.addDishToCourse('mains', 'garlic noodles', 4.60)
menu.addDishToCourse('mains', 'chicken salad', 4.00)
menu.addDishToCourse('desserts', 'cake', 3.00)
menu.addDishToCourse('desserts', 'vanilla pudding', 3.00)
menu.addDishToCourse('desserts', 'milkShake', 8.250)

const meal = menu.generateRandomMeal()
console.log(meal);