'use strict';
const { Film, FilmLibrary } = require('./FilmLibrary');

const film1 = new Film(1, "Chiedimi se sono Felice", true, '2020-12-01');
const film2 = new Film(2, "Tu la conosci Claudia?", false, '2020-12-01', 4);
const film3 = new Film(3, "Tre uomini e una gamba");


const library = new FilmLibrary()

library.addNewFilm(film1);
library.addNewFilm(film2);
library.addNewFilm(film3);
(async () => {
  const films = await library.getAllFilmsFromDB();
  console.log(films);
})()

console.log("ciao amanda");