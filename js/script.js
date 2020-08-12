const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questionOne = prompt('Один из последних просмотренных фильмов?', '');
const questionTwo = prompt('На сколько оцените его?', '');
const questionThree = prompt('Один из последних просмотренных фильмов?', '');
const questionFour = prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);