'use strict';

const bills = [125, 555, 44];
let tips = [], total = [];

// calculate the tip. 15% if [50, 300] and 20% otherwise
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100))

for (let i = 0; i < bills.length; i++) {
    tips[i] = (calcTip(bills[i]));
    total[i] = bills[i] + tips[i];
}

console.log(tips)
console.log(total)