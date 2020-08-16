'use strict'
//const now  = new Date();
/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); */

/* console.log(now.getTime());
console.log(now.getTimezoneOffset()); */
//console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(start.getMilliseconds());
console.log(end.getMilliseconds());

alert(`Цикл отработал за ${end - start} миллисекунд`);

