/* const timerId = setTimeout(function () {
    console.log('Hello');
}, 2000); */

/* const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, 'Hello'); */

/* const timerId = setTimeout(logger, 2000);

clearInterval(timerId);*/

 const btn = document.querySelector('.btn');
 const elem = document.querySelector('.box');
 let timerId;
 let i = 0;

 /*btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
 });

 function logger() {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i += 1;
} */


/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 2000);
}, 2000) */

// function myAnimation () {
//     let pos = 0;

//     function frame() {
//         if (pos == 300) {
//             clearInterval(timerId);
//         } else {
//             pos += 1;
//             elem.style.top = `${pos}px`;
//             elem.style.left = `${pos}px`;
//         }
//     }

//     let timerId = setInterval(frame, 10);
// }

// btn.addEventListener('click', myAnimation);




//Анимация с помощью Функции requestAnimationFrame


let pos = 0;

function myAnimation () {
    pos += 1;
    elem.style.top = `${pos}px`;
    elem.style.left = `${pos}px`;

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }

    
}

btn.addEventListener('click',() => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);










