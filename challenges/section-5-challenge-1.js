// given an array of forecasted max. temperatures, the thermometer displays a string with these temperatures.
"use strict";

// 3 variations of test data
const temperatures = [
    [17, 21, 23],
    [12, 5, -5, 0, 4],
    [0]
];

const printForecast = (arr) => {
    let string = '';

    for (let i in arr)
        string += `... ${arr[i]}°C in ${Number(i) + 1} day(s) `;

    return string;
}


temperatures.forEach(arr => {
    console.log(printForecast(arr));
})