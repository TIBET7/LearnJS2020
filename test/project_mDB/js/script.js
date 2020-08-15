
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img');
    const bg = document.querySelector('.promo__bg');
    const movieList = document.querySelector('.promo__interactive-list');
    const form = document.querySelector('form.add');
    const addInput = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type="checkbox"]');
    const trashCanItems = document.querySelectorAll('.delete');

    /* New film */

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
    
        if (newFilm) {

            if (favorite) {
                console.log('Добавляем любимый фильм')
            }
           
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`; 
            } 
    
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        }  
    });  
    
    
   /* Remove ad units */

    const deleteAdv = (arr) => {
        arr.forEach(element => element.remove());
    };
   
   /*  Make changes */

    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    }

    /* Sort array */

    const sortArr = (arr) => arr.sort();


   /*  Create movies list */

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});