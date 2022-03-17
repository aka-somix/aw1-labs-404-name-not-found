'use strict';
const dayjs = require('dayjs');
const Database = require('sqlite3').Database

class Film {
  constructor(id, title, isFav = false, date, rating) {
    this.id = id;
    this.title = title;
    this.isFav = isFav;
    if (date) {
      this.date = dayjs(date).format('YYYY-MM-DD');
    }
    this.rating = rating;
  }
}

class FilmLibrary {

  filmCollection = {};

  async getAllFilmsFromDB() {
    return new Promise((resolve, reject) => {
      const db = new Database('./data/films.db', (err) => { if (err) throw err; });
      try {
        db.all("SELECT * FROM films", [], (err, rows) => {
          // Error handling
          if (err) { return reject(err) }
          const films = rows.map((row) => new Film(row.id, row.title, row.favorite, row.watchDate, row.rating));
          return resolve(films)
        });
      }
      finally {
        db.close();
      }
    });
  }

  addNewFilm(film) {
    this.filmCollection[film.id] = film
  };

  deleteFilm(id) {
    delete this.filmCollection[id]
  };

  getFilmList() {
    return Object.values(this.filmCollection);
  }

  resetWatchedFilms() {
    Object.values(this.filmCollection).forEach((film) => {
      film.date = undefined;
    });
  }

  getRated() {
    return Object.values(this.filmCollection).filter(
      /*
       * ATTENZIONE!
       * In generale si potrebbe filtrare utilizzando solo film => film.rating 
       * utilizzando il fatto che "undefined" è un valore FALSY e quindi se
       * controllato come booleano restituisce false. 
       * In questo caso però non possiamo fare questo check perché anche 0 è un 
       * valore FALSY, per cui tutti i film con valutazione 0/5 sarebbero scartati
       * erroneamente!
       */
      film => film.rating !== undefined
    )
  }
}

module.exports = {
  Film,
  FilmLibrary
}