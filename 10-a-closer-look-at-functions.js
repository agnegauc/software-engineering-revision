'use strict';

// Section 10: A closer look at functions


// IIFE
(() => console.log('Immediately invoked'))();


// default params values
const defaultParamsValues = () => {
    const createBooking = function (num = 1, pass = 1, price = 1) {
        const booking = {
            num, pass, price
        }

        console.log(booking); // 123 1 1
    }

    createBooking('123')
}


// modifying object values  
const modifyObjValues = () => {
    const flight = 'lh234';

    const flightPsgr = {
        name: 'Jonas',
        passport: 234923592
    }


    const checkIn = function (flightNum, passenger) {
        flightNum = 'lh999';
        passenger.name = 'Mr. ' + passenger.name;
        console.log(passenger.passport);

        if (passenger.passport === 234923592)
            console.log('You can check in.');
        else
            console.log('Wrong passport.');
    }

    checkIn(flight, flightPsgr); // You can check in



    const newPassport = function (person) {
        person.passport = Math.floor(Math.random() * 9999999);
    }

    newPassport(flightPsgr);
    checkIn(flight, flightPsgr); // Wrong passport.
}


// callbacks and functions returning functions
const callbacksAndFns = () => {
    const oneWord = function (str) {
        return str.replace(/ /g, '').toLowerCase();
    }


    const upperFW = function (str) {
        const [first, ...others] = str.split(' ');
        return [first.toUpperCase(), ...others].join(' ');
    }




    const trans = function (str, fn) {
        console.log(fn(str));
    }



    trans('Javascript is the best', oneWord);



    const greet = (greeting) => {
        return (name) => {
            console.log(`${greeting} ${name}`);
        }
    }

    const greeterHey = greet('hey');
    console.log(greeterHey); // (name) => {console.log(`${greeting} ${name}`)}

    greeterHey('Steven'); // hey Steven

    greet('hey')('Jonas'); // hey Jonas
}


// bind, call. apply is 'call' if you use the spread operator
const bindCallFlights = () => {
    const lufth = {
        airline: 'lufth',
        iataCode: 'LH',
        bookings: [],

        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
            this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
        }
    }


    lufth.book(14, 'Tom'); // Tom booked a seat on lufth flight 14


    const eurow = {
        airline: 'eurow',
        iataCode: 'EW',
        bookings: []
    }


    // not a method aymore, just a fn & 'this' is undefined
    const book = lufth.book;


    book.call(eurow, ...[23, 'Derek']);



    // bind gives a new fn bound to given parameter as 'this'
    const bookEW = book.bind(eurow);
    bookEW(45, 'Steve');

    console.log(...eurow.bookings); // 2 bookings - Derek's and Steve's
}


// functions returning functions
const taxExercise = () => {
    const addTax = (rate, value) => {
        return value + value * rate;
    }


    const addVAT = addTax.bind(null, 0.23);

    console.log(addVAT(100));  // 123, because 100 + 100*0.23


    const addVAT2 = (rate) => (value) => value + value * rate;
    const addVAT3 = addVAT2(3);

    console.log(addVAT3(5)); // 20, because 5 + 5 * 3 
}


// bind
const pollExercise = () => {
    const testData = {
        answers: [5, 2, 3]
    }

    const poll = {
        question: `What's your favorite language?`,
        options: ['0: Javascript', '1: Python', '2: R', '3: C++'],

        answers: new Array(4).fill(0),

        registerNewAnswer() {
            let choice = Number(prompt(this.question + [...this.options].join('\n') + '\nWrite the option number\n')),
                str = '';

            if (choice >= 0 && choice < this.answers.length)
                this.answers[choice]++;
            else
                console.log('Number out of bounds')


            for (let item in this.answers)
                str += this.answers[item] + ', ';

            str = str.substr(0, str.length - 2);

            this.displayResults(str);
        },

        displayResults(str) {
            if (str)
                console.log(`Poll results are ${str}`);
            else
                console.log(this.answers);
        }

    }

    document.querySelector('#answer-poll').addEventListener('click', poll.registerNewAnswer.bind(poll));



    poll.displayResults.bind(testData)(); // [5, 2, 3]
}