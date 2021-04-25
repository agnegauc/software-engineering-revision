// find the winner(s) of a competition and only give them a prize if their score is equal to or higher than minimumScore
let teamAvgScores = [],
    teamScores = [
        [96, 109, 89],
        [88, 93, 110],
        [96, 89, 108],
        [96, 109, 89],
        [96, 109, 89]];


const avgScore = (arr, index) => {
    // providing an initial value
    teamAvgScores[index] = 0;

    for (let i = 0; i < arr.length; i++)
        teamAvgScores[index] += arr[i];

    return teamAvgScores[index] /= arr.length;
}


const determineWinner = () => {
    const minimumScore = 90;

    // in this context its OK to use 0 and not the first element of an array for the biggestScore
    let biggestScore = 0, draw = false, whoWon = [];

    for (let i = 0; i < teamAvgScores.length; i++) {
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
