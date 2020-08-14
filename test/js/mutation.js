'use strict';
/* let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(obj.a) */


/* function copy(mainObj) {
    let objCopy = {};
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    } return objCopy;
} */

/* const numbers = {
    a: 5,
    b: 1,
    c: {
        x: 7,
        y: 4
    }
}; */

/* const newNumbers  = copy(numbers);
console.log(newNumbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers); */

/* const add = {
    d: 17,
    i: 20
};

const numbersCopy = Object.assign({}, numbers);
numbersCopy.b = 125;
console.log(numbersCopy);
console.log(numbers); */

/* const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 25;

console.log(newArray);
console.log(oldArray);
 */

 /* const video = ['youtube', 'vimeo', 'rutube'];
 const blogs = ['wordpress', 'livejournal', 'blogger'];

 const internet = [...video, ...blogs, 258, 459];

 console.log(internet); */
/* 
 const blogs = ['wordpress', 'livejournal', 'blogger'];
 const level = [];
 const internet = [...blogs, ...level];

 internet[0] = 'creats';

 console.log(internet);
 console.log(blogs);

 function log(a, b, c) {
     console.log(a);
     console.log(b);
     console.log(c);
 }

 const numbers = [2, 5, 7];

 log(...numbers);
 */

 /* const array = ['a', 'b'];
 const newArray = [...array];
 newArray[0] = 111111111111;

 console.log(newArray);
 console.log(array); */

 const q = {
     one: 1,
     two: 2
 };

 const newQ = {...q};

 console.log(newQ);

 newQ.one = 258;

 console.log(newQ);
 console.log(q);







