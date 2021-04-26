'use strict';

// the challenge stated that only 3 scores and 2 teams are present so I will complete this challenge in the most simple way possible
const dolphinsScore = [
    [44, 23, 71],
    [65, 54, 49]];

const koalasScore = [
    [85, 54, 41],
    [23, 34, 27]];


const calcAverage = (scoresArr) => (scoresArr[0] + scoresArr[1] + scoresArr[2]) / 3;


const checkWinner = function (team1, team2) {
    if (team1 >= team2 * 2)
        console.log(`Dolphins win: (${team1} vs. ${team2})`);
    else if (team2 >= team1 * 2)
        console.log(`Koalas win: (${team2} vs. ${team1})`);
    else
        console.log(`Noone wins. Team scores - Dolphins: ${team1}, koalas: ${team2}`);
}

const avgDolphins = calcAverage(dolphinsScore[1]),
    avgKoalas = calcAverage(koalasScore[1]);

checkWinner(avgDolphins, avgKoalas);