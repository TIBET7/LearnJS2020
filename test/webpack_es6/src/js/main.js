export function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye');
    };
}

export let one = 10;

let two = 2;

export { two };

export default function() {
    console.log('Hello Billy man');
}

