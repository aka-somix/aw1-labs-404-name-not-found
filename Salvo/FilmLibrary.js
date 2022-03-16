'use strict';

class Film {
  constructor(id, title, isFav = false, date, rating) {
    this.id = id;
    this.title = title;
    this.isFav = isFav;
    this.date = date;
    this.rating = rating;
  }
}

class FilmLibrary {

  filmCollection = {};

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