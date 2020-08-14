'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

const { colors, height } = options;

console.log(name);

const { border, background } = options.colors;

console.log(background);

options.makeTest();

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let item in options[key] ) {
            console.log(`Свойство ${item} имеет значение ${options[key][item]}`);
            counter += 1;
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter += 1;
    } 
}

console.log(counter);



console.log(Object.keys(options).length);

/* delete options.colors;

console.log(options); */

