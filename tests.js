'use strict';

// const bookings = [];

// const createB = function (num = 1, pass = 1, price = 1) {



//     const booking = {
//         num, pass, price

//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createB('123')
// createB('123', 4, 22)








// const flight = 'lh234';

// const jonas = {
//     name: 'Jonas g',
//     passport: 234923592
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'lh999';
//     passenger.name = 'Mr. ' + passenger.name;
//     console.log(passenger.passport)
//     if (passenger.passport === 234923592)
//         alert('check in')
//     else
//         console.log('wrong pp')
// }


// checkIn(flight, jonas)
// console.log(flight)
// console.log(jonas)



// const newPassport = function (person) {
//     person.passport = Math.floor(Math.random() * 9999999);
// }

// newPassport(jonas)
// checkIn(flight, jonas)
// console.log(jonas)



// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }


// const upperFW = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }




// const trans = function (str, fn) {
//     console.log(fn(str))
// }



// trans('Javascript is the best', oneWord)



// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`)
//     }
// }


// const greeterHey = greet('hey')
// console.log(greeterHey)
// greeterHey('Jonas')
// greeterHey('Steven')

// greet('hey')('jonas')




const lufth = {
    airline: 'lufth',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
    }
}


lufth.book(14, 'asd')

const eurow = {
    airline: 'eurow',
    iataCode: 'EW',
    bookings: [],


}

// not a method anymore, just a fn & 'this' is undefined
const book = lufth.book;
// book(23, 'dada')

// this points to & only then other params
// book.call(eurow, 23, 'sdasdas')




// const data = [14, 'afafa']
// this points to & only then other params

// book.apply(lufth, data)
// book.call(lufth, ...data)






// bind gives a new fn. nebutinai thisui, galima null palikt

// const bookEW = book.bind(eurow)
// bookEW(23, 'steven s')
// console.log(eurow)



// const addTax = (rate, value) => {
//     return value + value * rate;
// }



// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));


// const addVAT2 = (rate) => (value) => value + value * rate;
// console.log(addVAT2)
// const addVAT3 = addVAT2(3);
// console.log(addVAT3)

// console.log(addVAT3(5))







// const testdata = {
//     answers: [5, 2, 3]
// }

// const poll = {
//     question: 'whats ur fav lang',
//     options: ['0: js', '1pyth', '2r', '3cpp'],

//     answers: new Array(4).fill(0),

//     registerNewAnswer() {
//         let choice = Number(prompt(this.question + [...this.options].join('\n') + '\nwrite option number\n'))
//         if (choice >= 0 && choice < this.answers.length)
//             this.answers[choice]++;

//         let str = '';
//         for (let item in this.answers)
//             str += this.answers[item] + ', '

//         this.displayResutls(this.answers)
//         this.displayResutls(str)
//     },

//     // type = str/arr
//     displayResutls(type) {
//         console.log(this.answers)
//         // if arr = display res
//         if (typeof type === String)
//             console.log(`Poll results are ${type}`)
//         else
//             console.log(type)
//     }

// }
// document.querySelector('#answer-poll').addEventListener('click', poll.registerNewAnswer.bind(poll))



// poll.displayResutls.bind(testdata)()







// (() => console.log('3131'))();



// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount += 2;
//         console.log(passengerCount);
//     }
// }

// const booker = secureBooking()


// booker()
// booker()
// booker()



// let f;
// const g = function () {
//     f = function () {
//         console.log(a * 2);
//     }

//     const a = 23;
// }


// const h = function () {
//     const b = 77;
//     f = function () {
//         console.log(b * 2);
//     }


// }


// g()
// f()

// h();
// f()




// const boardPsg = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log('boarding ' + n);
//         console.log(`${perGroup} psgrs`);
//     }, wait * 1000);


//     console.log(`boarding in ${wait} secs`);
// }
// const perGroup = 12312;

// boardPsg(180, 3)

// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

//     const b = document.getElementsByTagName('body')[0];


//     b.addEventListener('click', function () {
//         header.style.color = 'blue';
//     })
// })();




// const Person = function (firstName, bYear) {
//     this.firstName = firstName,
//         this.bYear = bYear;
// }

// const z = new Person('jonas', 1422)
// console.log(z)


const Student = function (age) {
    this.age = age;
}

const jonas = new Student(2)

console.log(Student.prototype)

Student.prototype.calgAge = function () {
    console.log(2020 - this.age)
}

jonas.calgAge()