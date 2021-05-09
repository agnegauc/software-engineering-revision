'use strict';

// find the winner(s) of a competition and only give them a prize if their score is equal to or higher than minimumScore
let teamScores = [
    [96, 109, 89],
    [88, 93, 110],
    [96, 89, 108],
    [96, 109, 89],
    [96, 109, 89]],
    teamAvgScores = new Array(teamScores.length).fill(0);


const avgScore = (arr, index) => {
    for (let i = 0; i < arr.length; i++)
        teamAvgScores[index] += arr[i];

    return teamAvgScores[index] /= arr.length;
}


const determineWinner = () => {
    const minimumScore = 90;

    // whoWon has '1' because the default biggestScore value is from team index 0 (#1 because we start counting teams from #1)
    let biggestScore = teamAvgScores[0], draw = false, whoWon = [1];

    for (let i = 1; i < teamAvgScores.length; i++) {
        if (biggestScore < teamAvgScores[i] && teamAvgScores[i] > minimumScore) {
            // resetting previous candidates and setting the new biggestScore
            whoWon = [], draw = false, biggestScore = teamAvgScores[i];

            // pushing the number of the team. starting from #1 so +1
            whoWon.push(i + 1);
        }
        else if (biggestScore === teamAvgScores[i]) {
            draw = true;

            // pushing the number of the team. starting from #1 so +1
            whoWon.push(i + 1);
        }
    }

    if (draw)
        return whoWon.sort()
    else
        return whoWon;
}


// calculate and display all teamAvgScores
for (let i = 0; i < teamScores.length; i++)
    console.log(`Team #${i + 1} average score: ` + avgScore(teamScores[i], i).toFixed(2));


// determine the winner
const whoWon = determineWinner();

console.log(`------------------------------------
The results: 
`);


if (whoWon.length > 1)
    for (let i = 0; i < whoWon.length; i++)
        console.log(`Team #${whoWon[i]} is a co-champion! Their score is ${teamAvgScores[whoWon[i] - 1].toFixed(2)}`)
else if (whoWon.length === 1)
    console.log(`Team #${whoWon} is a champion! Their score is ${teamAvgScores[0].toFixed(2)}`)
else
    console.log('No winner was found');