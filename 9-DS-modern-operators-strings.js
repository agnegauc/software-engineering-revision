'use strict';

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


        let [, , third, fourth] = manyValues;
        print([third, fourth]); // 3 4


        // swap (slower but OK for small amounts of data)
        [first, second] = [second, first];
        print([first, second]); // 1 2 


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
                    open: 0, // open 24 hours
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
        }



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
        print([restaurantName, hours, tags]);


        // default values
        const { menu = [], starterMenu: starters = [] } = restaurant;
        console.log(menu, starters);


        // mutating variables
        let a = 0, b = 0;
        const obj = { a: 23, b: 7, c: 14 };

        // {a,b} = obj; = error, because javascript thinks it's a code block
        ({ a, b } = obj);
        console.log(a, b); // => 23 7



        // destructuring nested objects
        const { fri: { open: o, close: c } } = openingHours;
        console.log(o, c);
    }

    destructuringObjects();
}

destructuring();


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