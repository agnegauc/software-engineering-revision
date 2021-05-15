'use strict';

// used in many functions therefore it's global
const restaurant = {
    name: 'Pizza Hut',
    categories: ['Italian', 'Vegetarian'],
    starterMenu: ['Tea', 'Coffee', 'Garlic bread'],
    mainMenu: ['Pizza', 'Salad', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },



    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // 1 argument (1 object) and the destructuring happens immediately. THE PROPERTIES DON'T HAVE TO MATCH THE ORDER
    orderDelivery: function ({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${address}.`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is the pasta with ${ing1}, ${ing2}, ${ing3}.`);
    },
}



// playing around with functions, this 'print' function isn't really necessary
const print = args => {
    if (typeof (args) === "string")
        console.log(args)
    else
        console.log(...args)
}

// destructuring & how to receive 2 values from return
const destructuring = () => {
    const destructuringArrays = () => {
        const manyValues = [1, 2, 3, 4, 5, 6, 7];


        let [first, , third, fourth] = manyValues;
        print([first, third, fourth]); // 3 4


        // swap (slower but OK for small amounts of data)
        [first, fourth] = [fourth, first];
        print([first, fourth]); // 1 4


        // Nested destructuring
        const nested = [2, 4, [5, 6]];
        const [foo, , bar] = nested;
        print([foo, bar]); // 2, [5,6]

        const [i, , [j, k]] = nested;
        print([i, j, k]); // 2 5 6


        // set default values if we don't know the length of an array
        const [p = 1, q = 1, r = 1] = [8, 9];
        print([p, q, r]); // 8  9  1
    }


    const destructuringObjects = () => {
        // passing an object to a function and destructuring it
        restaurant.orderDelivery({
            time: '22:30',
            address: 'Via del Sole, 50',
            mainIndex: 2,
            starterIndex: 2,
        }); // => Order received! Garlic bread and Risotto at 22:30 to Via del Sole, 50.




        // giving only some params and using the default values
        restaurant.orderDelivery({
            address: 'Via del Sole, 50',
            starterIndex: 1,
        }); // Order received! Coffee and Salad at 20:00 to Via del Sole, 50.




        // receive 2 return values from a function
        const [starter, main] = restaurant.order(2, 0);
        print([starter, main]); // [garlic bread, pizza]


        // the order and amount of necessary data doesn't matter because it's an object
        // very good for API calls
        const { name, openingHours, categories } = restaurant;
        console.log(name, openingHours, categories); // => Pizza Hut {thu: {…}, fri: {…}, sat: {…}} (2) ["Italian", "Vegetarian"]


        // give custom variable names for the received data
        const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
        print([restaurantName, hours, tags]); // => Pizza Hut {thu: {…}, fri: {…}, sat: {…}} (2) ["Italian", "Vegetarian"]


        // default values
        const { menu = [], starterMenu: starters = [] } = restaurant;
        console.log(menu, starters); // => [] (3) ["Tea", "Coffee", "Garlic bread"]. Empty array beause restaurant.menu does not exist


        // mutating variables
        let a = 0, b = 0;
        const obj = { a: 23, b: 7, c: 14 };

        // {a,b} = obj; = error, because javascript thinks it's a code block
        // 'a' and 'b' have to match the obj properties' names
        ({ a, b } = obj);
        console.log(a, b); // => 23 7



        // destructuring nested objects
        // o = openingHours.fri.open
        // c = openingHours.fri.close
        const { fri: { open: o, close: c } } = openingHours;
        console.log(o, c); // => 11 23
    }

    const revision = () => {
        const printInfo = ({ studentName = 'Our student', achievements = 'good at maths', hobbies = ['history', 'basketball', 'football'] }) => {
            console.log(`${studentName} who is ${achievements} likes ${hobbies.join(', ')}.`);
        }

        // printInfo(); WOULD GIVE AN ERROR BECAUSE WE PASS UNDEFINED 
        printInfo({}); // Our student who is good at maths likes history, basketball, football.
        printInfo({ studentName: "Jonas", hobbies: ["swimming", "chess"] }); // Jonas who is good at maths likes swimming, chess.
        printInfo({ hobbies: ["swimming", "chess"], achievements: "good at English" }); // Our student who is good at English likes swimming, chess.
        printInfo({ hobbies: ["swimming", "chess"], randomData: 'onetwothree' }); // Our student who is good at maths likes swimming, chess.
    }

    revision();
}


// used to unpack iterable values (arrays, strings, maps, sets, NOT OBJECTS)
const spreadOperator = () => {
    const arr = [7, 8, 9],
        newArr = [2, 4, ...arr];

    console.log(newArr); // => [2, 4, 7, 8, 9]


    const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

    print(newMenu); // => Pizza Salad Risotto Gnocchi


    const joinedArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];

    console.log(joinedArrays); // => ["Pizza", "Salad", "Risotto", "Tea", "Coffee", "Garlic bread"]


    const str = 'Jonas',
        letters = [...str, ' ', 'S.'];

    console.log(letters); // => ["J", "o", "n", "a", "s", " ", "S."]
    // console.log(`${...str}`) // => ERROR. multiple values separated by a comma are typically used only in arrays or functions

    const ingredients = [
        // prompt('Ingredient #1'),
        // prompt('Ingredient #2'),
        // prompt('Ingredient #3')
    ];

    restaurant.orderPasta(...ingredients); // Here is the pasta with ketchup, cheese, spices. ('ketchup', 'cheese', 'spices' as prompt inputs)


    // Copy objects (different references therefore it's possible to modify one and the other one DOES NOT CHANGE)
    // Objects. Again, THEY ARE NOT ITERABLE, but since ES2018 the spread operator works on them.
    const newRestaurant = { yearlyRevenue: 184000, ...restaurant, owner: 'Thomas' };
    console.log(newRestaurant);


    const revision = () => {
        const Student = function ({ firstName, lastName }) {
            this.firstName = firstName;
            this.lastName = lastName;
        };

        // displaying the capabilities of object destructuring by inserting an object with properties that are not in the correct order yet still work
        const Thomas = new Student({ lastName: "Jefferson", firstName: 'Thomas' });

        // using the spread operator to make a copy of an object
        const ThomasJr = { youngerSibling: true, ...Thomas };


        console.log(Thomas); // => Student {firstName: "Thomas", lastName: "Jefferson"}
        console.log(ThomasJr); // => {youngerSibling: true, firstName: "Thomas", lastName: "Jefferson"}


        // IMPORTANT! the spread operator only copies the properties and values and ignores the prototype chain
        console.log(Thomas.__proto__.constructor.name); // => Student
        console.log(ThomasJr.__proto__.constructor.name); // => Object
    };
    revision()
};

spreadOperator();