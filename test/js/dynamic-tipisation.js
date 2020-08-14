// to String

//let a = 5;

//console.log(typeof(a));

//let b = String(a);

//let c = '' + 5;

//console.log(typeof(c));

//to Number

let str = "12.2 px";

let num = parseInt(str);

console.log(num);//12

let numFloat = parseFloat(str);

console.log(numFloat);//12.2

let unaryPlus = +str;

console.log(typeof(unaryPlus));//number


//to Boolean

0, '', undefined, NaN, Null //false

console.log(typeof(Boolean('4')));//boolean

console.log(typeof(!!'4'));//boolean