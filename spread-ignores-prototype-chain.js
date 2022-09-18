'use strict';

const Person = function ({ age }) {
    this.age = age;
};


const Jonas = new Person({ age: 25 });
const Tomas = { ...Jonas, age: 30 };


console.log(Jonas); // => Person {age: 25}
console.log(Tomas); // => {age: 30}


console.log(Jonas.__proto__.constructor.name); // => Student
console.log(Tomas.__proto__.constructor.name); // => Object. Spread operator ignores the prototype chain!
