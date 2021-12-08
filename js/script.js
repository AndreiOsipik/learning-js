'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", '');
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('hor');
    } else {
      alert('некорректные данные');
      console.log('pl');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
  } else {
    console.log('ошибка');
  }

}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();



// console.log(personalMovieDB)