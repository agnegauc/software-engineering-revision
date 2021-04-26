"use strict";


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], totals = [];

// functions
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcAverage = arr => {
    let sum = 0;

    for (let i in arr)
        sum += arr[i];

    return sum / arr.length;
}

for (let i in bills) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i])
}


console.log(calcAverage(totals))
console.log(tips)
console.log(totals)