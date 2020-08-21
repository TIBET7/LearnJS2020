'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

alex.hello();
ivan.hello();

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} вышел из системы`);
};
ivan.exit();
alex.exit();
// console.log(alex);
