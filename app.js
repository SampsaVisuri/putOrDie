// Variables for the oputRounds
var resultOne = document.getElementById('one');
var resultTwo = document.getElementById('two');
var resultThree = document.getElementById('three');
var resultFour = document.getElementById('four');
var resultFive = document.getElementById('five');
var resultSix = document.getElementById('six');
var resultSeven = document.getElementById('seven');
var resultEight = document.getElementById('eight');
var resultNine = document.getElementById('nine');
var resultTen = document.getElementById('ten');
var resultEleven = document.getElementById('eleven');
var resultTwelve = document.getElementById('twelve');
var resultThirteen = document.getElementById('thirteen');
var resultFourteen = document.getElementById('fourteen');
var resultFifteen = document.getElementById('fifteen');
var resultSixteen = document.getElementById('sixteen');
var resultSeventeen = document.getElementById('seventeen');
var resultEighteen = document.getElementById('eighteen');
var resultNineteen = document.getElementById('nineteen');
var resultTwenty = document.getElementById('twenty');

// Variables for the buttons
var buttonUndo = document.getElementById("buttonUndo");
var buttonZero = document.getElementById("buttonZero");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var buttonFive = document.getElementById("buttonFive");

// Variabled for distance 

var tenMeters = 10;
var nineMeters = 9;
var eightMeters = 8;
var sevenMeters = 7;
var sixMeters = 6;
var fiveMeters = 5;


buttonZero.onclick = function () {
    if (roundCount == 1) {
        resultOne.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        resultTwo.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        resultThree.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 4) {
        resultFour.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 5) {
        resultFive.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 6) {
        resultSix.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 7) {
        resultSeven.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 8) {
        resultEight.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 9) {
        resultNine.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 10) {
        resultTen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 11) {
        resultEleven.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 12) {
        resultTwelve.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 13) {
        resultThirteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 14) {
        resultFourteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 15) {
        resultFifteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 16) {
        resultSixteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 17) {
        resultSeventeen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 18) {
        resultEighteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 19) {
        resultNineteen.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
    } else if (roundCount == 20) {
        resultTwenty.innerHTML = 0;
        roundCount++;
        distance = fiveMeters;
        document.getElementById("round").innerHTML = "Game Over";
        document.getElementById("distance").innerHTML = distance;
        alert('Your score is ' + score);
    }
    storeLastDistance.push(5);
    console.log(storeLastDistance);
}

buttonOne.onclick = function () {
    if (roundCount == 1) {
        resultOne.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        resultTwo.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        resultThree.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        resultFour.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        resultFive.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        resultSix.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        resultSeven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        resultEight.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        resultNine.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        resultTen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        resultEleven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        resultTwelve.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
    else if (roundCount == 13) {
        resultThirteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        resultFourteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        resultFifteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        resultSixteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        resultSeventeen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        resultEighteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        resultNineteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        resultTwenty.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sixMeters;
        document.getElementById("round").innerHTML = 'Game Over';
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
        alert('Your score is ' + score);
    }

    storeLastDistance.push(6);
    console.log(storeLastDistance);
}

buttonTwo.onclick = function () {
    if (roundCount == 1) {
        distance *= 2;
        resultOne.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        distance *= 2;
        resultTwo.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        distance *= 2;
        resultThree.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        distance *= 2;
        resultFour.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        distance *= 2;
        resultFive.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        distance *= 2;
        resultSix.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        distance *= 2;
        resultSeven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        distance *= 2;
        resultEight.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        distance *= 2;
        resultNine.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        distance *= 2;
        resultTen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        distance *= 2;
        resultEleven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        distance *= 2;
        resultTwelve.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
    else if (roundCount == 13) {
        distance *= 2;
        resultThirteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        distance *= 2;
        resultFourteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        distance *= 2;
        resultFifteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        distance *= 2;
        resultSixteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        distance *= 2;
        resultSeventeen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        distance *= 2;
        resultEighteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        distance *= 2;
        resultNineteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        distance *= 2;
        resultTwenty.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = sevenMeters;
        document.getElementById("round").innerHTML = 'Game Over';
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
        alert('Your score is ' + score);
    }

    storeLastDistance.push(7);
    console.log(storeLastDistance);

}


buttonThree.onclick = function () {
    if (roundCount == 1) {
        distance *= 3;
        resultOne.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        distance *= 3;
        resultTwo.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        distance *= 3;
        resultThree.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        distance *= 3;
        resultFour.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        distance *= 3;
        resultFive.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        distance *= 3;
        resultSix.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        distance *= 3;
        resultSeven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        distance *= 3;
        resultEight.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        distance *= 3;
        resultNine.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        distance *= 3;
        resultTen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        distance *= 3;
        resultEleven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        distance *= 3;
        resultTwelve.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
    else if (roundCount == 13) {
        distance *= 3;
        resultThirteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        distance *= 3;
        resultFourteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        distance *= 3;
        resultFifteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        distance *= 3;
        resultSixteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        distance *= 3;
        resultSeventeen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        distance *= 3;
        resultEighteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        distance *= 3;
        resultNineteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        distance *= 3;
        resultTwenty.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = eightMeters;
        document.getElementById("round").innerHTML = 'Game Over';
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
        alert('Your score is ' + score);
    }
    storeLastDistance.push(8);
    console.log(storeLastDistance);
}


buttonFour.onclick = function () {
    if (roundCount == 1) {
        distance *= 4;
        resultOne.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        distance *= 4;
        resultTwo.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        distance *= 4;
        resultThree.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        distance *= 4;
        resultFour.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        distance *= 4;
        resultFive.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        distance *= 4;
        resultSix.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        distance *= 4;
        resultSeven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        distance *= 4;
        resultEight.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        distance *= 4;
        resultNine.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        distance *= 4;
        resultTen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        distance *= 4;
        resultEleven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        distance *= 4;
        resultTwelve.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
    else if (roundCount == 13) {
        distance *= 4;
        resultThirteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        distance *= 4;
        resultFourteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        distance *= 4;
        resultFifteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        distance *= 4;
        resultSixteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        distance *= 4;
        resultSeventeen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        distance *= 4;
        resultEighteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        distance *= 4;
        resultNineteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        distance *= 4;
        resultTwenty.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = nineMeters;
        document.getElementById("round").innerHTML = 'Game Over';
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
        alert('Your score is ' + score);
    }

    storeLastDistance.push(9);
    console.log(storeLastDistance);

}


buttonFive.onclick = function () {
    if (roundCount == 1) {
        distance *= 5;
        resultOne.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 2) {
        distance *= 5;
        resultTwo.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        distance *= 5;
        resultThree.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        distance *= 5;
        resultFour.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        distance *= 5;
        resultFive.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        distance *= 5;
        resultSix.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        distance *= 5;
        resultSeven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        distance *= 5;
        resultEight.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        distance *= 5;
        resultNine.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        distance *= 5;
        resultTen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        distance *= 5;
        resultEleven.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        distance *= 5;
        resultTwelve.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
    else if (roundCount == 13) {
        distance *= 5;
        resultThirteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        distance *= 5;
        resultFourteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        distance *= 5;
        resultFifteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        distance *= 5;
        resultSixteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        distance *= 5;
        resultSeventeen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        distance *= 5;
        resultEighteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        distance *= 5;
        resultNineteen.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        distance *= 5;
        resultTwenty.innerHTML = distance;
        roundCount++;
        score = score + distance;
        distance = tenMeters;
        document.getElementById("round").innerHTML = 'Game Over';
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
        alert('Your score is ' + score);
    }

    storeLastDistance.push(10);
    console.log(storeLastDistance);

}



buttonUndo.onclick = function () {

    if (roundCount == 2) {
        score = score - resultOne.innerHTML;
        delete resultOne.innerHTML;
        resultOne.innerHTML = "";
        roundCount--;
        distance = 10;
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 3) {
        score = score - resultTwo.innerHTML;
        delete resultTwo.innerHTML;
        resultTwo.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 4) {
        score = score - resultThree.innerHTML;
        delete resultThree.innerHTML;
        resultThree.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 5) {
        score = score - resultFour.innerHTML;
        delete resultFour.innerHTML;
        resultFour.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 6) {
        score = score - resultFive.innerHTML;
        delete resultFive.innerHTML;
        resultFive.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 7) {
        score = score - resultSix.innerHTML;
        delete resultSix.innerHTML;
        resultSix.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 8) {
        score = score - resultSeven.innerHTML;
        delete resultSeven.innerHTML;
        resultSeven.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 9) {
        score = score - resultEight.innerHTML;
        delete resultEight.innerHTML;
        resultEight.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 10) {
        score = score - resultNine.innerHTML;
        delete resultNine.innerHTML;
        resultNine.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 11) {
        score = score - resultTen.innerHTML;
        delete resultTen.innerHTML;
        resultTen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 12) {
        score = score - resultEleven.innerHTML;
        delete resultEleven.innerHTML;
        resultEleven.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 13) {
        score = score - resultTwelve.innerHTML;
        delete resultTwelve.innerHTML;
        resultTwelve.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 14) {
        score = score - resultThirteen.innerHTML;
        delete resultThirteen.innerHTML;
        resultThirteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 15) {
        score = score - resultFourteen.innerHTML;
        delete resultFourteen.innerHTML;
        resultFourteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 16) {
        score = score - resultFifteen.innerHTML;
        delete resultFifteen.innerHTML;
        resultFifteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 17) {
        score = score - resultSixteen.innerHTML;
        delete resultSixteen.innerHTML;
        resultSixteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 18) {
        score = score - resultSeventeen.innerHTML;
        delete resultSeventeen.innerHTML;
        resultSeventeen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 19) {
        score = score - resultEighteen.innerHTML;
        delete resultEighteen.innerHTML;
        resultEighteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 20) {
        score = score - resultNineteen.innerHTML;
        delete resultNineteen.innerHTML;
        resultNineteen.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    } else if (roundCount == 21) {
        score = score - resultTwenty.innerHTML;
        delete resultTwenty.innerHTML;
        resultTwenty.innerHTML = "";
        roundCount--;
        distance = storeLastDistance.slice(-2)[0];
        storeLastDistance.pop();
        document.getElementById("round").innerHTML = roundCount;
        document.getElementById("distance").innerHTML = distance;
        document.getElementById("score").innerHTML = score;
        console.log(roundCount);
        console.log(distance);
    }
}


// Other variables
var roundCount = 1;
var distance = 10;
var score = 0;

// Click log

var storeLastDistance = [];



// Score variable


// Display distance in the begining
document.getElementById("distance").innerHTML = distance;
document.getElementById("score").innerHTML = score;
document.getElementById("round").innerHTML = roundCount;
