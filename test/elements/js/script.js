'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const heart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
//console.log(box);
//const buttonFirst = document.getElementsByTagName('button')[0];
//hearts.forEach((item) => console.log(item));
//console.log(heart);

/* let num = 500;

box.style.backgroundColor = "blue";

box.style.cssText = "background-color: purple; border-radius: 50%";
box.style.width = `${num}px`;

buttons[1].style.borderRadius = "100%";
circles[0].style.backgroundColor ="red";

for (let i = 0; i < hearts.length; i += 1) {
    hearts[i].style.backgroundColor = "green";
}

hearts.forEach((item) => {
    item.style.backgroundColor = "yellow";
}); */


//Создание элементов

/* const div = document.createElement('div');

const text = document.createTextNode('Text test');

div.classList.add('black');

//document.body.append(div);

//document.append(div);

//console.log(div);

//wrapper.prepend(div);

//hearts[1].after(div);

//circles[0].remove();

/* circles[0].style.backgroundColor ="red";

hearts[0].replaceWith(circles[0]); */


const div = document.createElement('div');

div.classList.add('black');
wrapper.append(div);

div.innerHTML = "<h1>Hello, world</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')













