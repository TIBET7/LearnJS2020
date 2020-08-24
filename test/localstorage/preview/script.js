'use strict';

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} 

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }

});


const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex',JSON.stringify(persone));

// console.log(JSON.parse(localStorage.getItem('alex')));



