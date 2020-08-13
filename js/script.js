'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();
    
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i += 1) {
        const favGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(favGenre);
    }
}

writeYourGenres();




