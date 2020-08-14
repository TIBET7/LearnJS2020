'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i += 1) {
            const questionOne = prompt('Один из последних просмотренных фильмов?', '');
            const questionTwo = prompt('На сколько оцените его?', '');
            if (typeof(questionOne) != null && typeof(questionTwo) != null &&
            questionOne != '' && questionTwo != '' && questionOne.length < 50) {
                personalMovieDB.movies[questionOne] = questionTwo;
            } else {
                i -= 1;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
           personalMovieDB.privat = false;
        } else{
        personalMovieDB.privat = true;
        }   
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i += 1) {
            let favGenres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (favGenres === null || favGenres === '') {
                console.log('Введены некорректные данные или данные отсутствуют');
                i -= 1;
            } else {
                personalMovieDB.genres = favGenres.split(',').sort();
            }   
        }
        personalMovieDB.genres.forEach((genre, i = 1) => {
            console.log(`Любимый жанр ${i} - это ${genre}`);
        });
    } 
};

