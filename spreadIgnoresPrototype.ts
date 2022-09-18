class Person {
    private readonly age: number;

    constructor(initialAge: number) {
        this.age = initialAge;
    }
}

const jonas = new Person(25);
const tomas = {...jonas, age: 20};

console.info(jonas); => Person {age: 25}
console.info(tomas); => {age: 20} // Spread operator modified the prototype chain
