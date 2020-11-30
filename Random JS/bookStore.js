class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get ratings() {
    return this._ratings;
  }

  get checkedOut() {
    return this._isCheckedOut;
  }

  set itsChecked(bool) {
    this.isCheckedOut = true;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut === true) {
      return (this._isCheckedOut = false);
    } else {
      return (this._isCheckedOut = true);
    }
  }

  getAverageRating() {
    let averageRating = this._ratings.reduce((cur, rating) => {
      cur + rating;
    });
    return averageRating / this._ratings.length;
  }

  addRating(rate) {
    return this._ratings.push(rate);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get bookAuthor() {
    return this._author;
  }

  get bookPages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get movieDirector() {
    return this._director;
  }

  get movieRuntime() {
    return this._runtime;
  }
}

const historyOfEverything = new Book(
  'Bill Bryson',
  'A Short History of Nearly Everything',
  544
);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating());
console.log(speed.movieRuntime);
