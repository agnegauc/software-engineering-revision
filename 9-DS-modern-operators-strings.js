'use strict';

// playing around with functions, this 'print' function isn't really necessary
const print = args => {
    if (typeof (args) === "string")
        console.log(args)
    else
        console.log(...args)
}

// destructuring
const destructuring = () => {
    const destructuringArrays = () => {
        const manyValues = [1, 2, 3, 4, 5, 6, 7];

        let [first, second] = manyValues;
        print([first, second]); // 1 2 


        let [, , third, fourth] = manyValues;
        print([third, fourth]); // 3 4


        // swap (slower but OK for small amounts of data)
        [first, second] = [second, first]
        print([first, second]); // 1 2 




        // Nested destructuring
        const nested = [2, 4, [5, 6]];
        const [foo, , bar] = nested;
        print([foo, bar]); // 2, [5,6]

        const [i, , [j, k]] = nested;
        print([i, j, k]); // 2 5 6




        // set default values if we don't know the length of an array
        const [p = 1, q = 1, r = 1] = [8, 9];
        print([p, q, r]); // 8  9 1

        const restaurant = {
            starterMenu: ['tea', 'coffee', 'garlic bread'],
            mainMenu: ['pizza', 'salad', 'risotto'],

            order: function (starterIndex, mainIndex) {
                return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
            }
        }

        // receive 2 return values from a function
        const [starter, main] = restaurant.order(2, 0);
        print([starter, main]); // [garlic bread, pizza]

    }

    destructuringArrays();
}

destructuring();
