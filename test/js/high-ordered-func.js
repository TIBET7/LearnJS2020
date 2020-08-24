'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);

//map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

//every/some

// const some = [4, 'qwq', 'sfreferf'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, item) => sum + item);

// console.log(res); //21

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, item) => sum + ', ' + item);
// const res1 = arr.reduce((sum, item) => `${sum}, ${item}`);

// console.log(res); 
// console.log(res1);

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, item) => sum + item, 3);

// console.log(res); //21

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const arr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(arr);

// const arrPersone = arr.filter(item => item[1] === 'persone');

// console.log(arrPersone);

// const nameArr = arrPersone.map(item => item[0]);

// console.log(nameArr);














