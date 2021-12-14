'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
      personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", '');

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", '');
      }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
        console.log("просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
      } else {
        console.log('ошибка');
      }
    },
    showMyDB: function () {
      if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = true
      } else {
        personalMovieDB.privat = false
      }
    },
    writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
        while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
          personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
        }
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр #${i} - это ${item}`)
      });

    }
  }   