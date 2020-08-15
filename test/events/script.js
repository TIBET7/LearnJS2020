const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

//btn.onclick = () => alert('You just pressed the button!');
//btn.onclick = () => alert('You just kick the button!');

/*btn.addEventListener('click', () => {
    alert('You just pressed the button!');
    alert('You just kick the button!');

});

btn.addEventListener('click', () => {
    alert('You just again kick the button!');

});*/

/* btn.addEventListener('click', (event) => {
    console.log(`Произошло событие ${event.type} на элементе ${event.target}`);
});
 */

/* btn.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "red";
});

btn.addEventListener('click', (event) => {
    event.target.style.width = "500px";
});

btns[1].addEventListener('click', (event) => {
    event.target.remove();
}); */
/* let i = 0;
const changeElementColor = (event) => {
    event.target.style.backgroundColor = "red";
    i += 1;
    if (i === 1) {
        btn.removeEventListener('click', changeElementColor);
    }
};

btn.addEventListener('click', changeElementColor); */

/* let i = 0;
const changeElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type); */
    /* i += 1;
    if (i === 1) {
        btn.removeEventListener('click', changeElementColor);
    } */
//};

/* btn.addEventListener('click', changeElement);
overlay.addEventListener('click', changeElement);

let link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Переход по ссылке отменен!');
});
 */

btns.forEach((btn) => {
    btn.addEventListener('mouseenter', (event) => {
        console.log('Вошли!');
    }, {once: true});
    btn.addEventListener('mouseleave', (event) => {
        console.log('Вышли!');
    });
});

