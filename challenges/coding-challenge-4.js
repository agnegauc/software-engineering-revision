'use strict';

// using a ternary operator instead of 'if, else'
const testData = [3, 275, 40, 50, 300, 430];

testData.forEach(billValue => {
    let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    console.log(`The bill was $${billValue.toFixed(2)}, the tip was $${tip.toFixed(2)} and the total value is $${(billValue + tip).toFixed(2)}.`);
})