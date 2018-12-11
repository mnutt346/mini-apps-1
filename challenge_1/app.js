

let board = document.getElementById('board');
let reset = document.getElementById('reset-button');
let playerOneScore = document.getElementById('player-one-score');
let playerTwoScore = document.getElementById('player-two-score');
let playerOneNameInput = document.getElementById('player-one-name-input');
let playerOneName = document.getElementById('player-one-name');
let playerTwoNameInput = document.getElementById('player-two-name-input');
let playerOneButton = document.getElementById('player-one-button');
let playerTwoButton = document.getElementById('player-two-button');

// Initialize with X first ----------------------

let xTurn = true;

// Allow players to enter their names ------------------

// playerOneClickHandler = function (name) {
//     console.log(name);
//     playerOneName.innerHTML = name;
// }

// playerOneButton.onclick = function () {
//     playerOneClickHandler(console.log(playerOneButton.target));
// }



// Store each player's selected squares ----------------------
let xSelections = [];
let oSelections = [];

// Store win record

const WinRecord = {
    playerOne: 0,
    playerTwo: 0
}


// Winner helper funciton --------------------

let detectWinner = function (selections) {
    if ((selections.includes(0) && selections.includes(1) && selections.includes(2)) ||
        (selections.includes(3) && selections.includes(4) && selections.includes(5)) ||
        (selections.includes(6) && selections.includes(7) && selections.includes(8)) ||
        (selections.includes(0) && selections.includes(3) && selections.includes(6)) ||
        (selections.includes(1) && selections.includes(4) && selections.includes(7)) ||
        (selections.includes(2) && selections.includes(5) && selections.includes(8)) ||
        (selections.includes(0) && selections.includes(4) && selections.includes(8)) ||
        (selections.includes(2) && selections.includes(4) && selections.includes(6))) {
        if (!xTurn) {
            WinRecord.playerOne++;
            playerOneScore.innerHTML = WinRecord.playerOne;
            window.alert("THIS NIC WINS");
        } else {
            WinRecord.playerTwo++;
            playerTwoScore.innerHTML = WinRecord.playerTwo;
            window.alert("THAT NIC WINS");
        }

        xSelections = [];
        oSelections = [];
    }
};


// Update squares on click and add selection to respective storage object ---------------------------------

let squareClickHandler = function (elem, number) {
    if (elem.clicked) {
        return;
    } else if (xTurn) {
        let thisNic = '<img style="vertical-align: bottom;" width="100%" height="100%" src="thisNic.jpg" />'
        elem.innerHTML = thisNic;
        elem.clicked = true;

        // Store selection
        let xSelection = number;
        xSelections.push(xSelection);

        // Check for winner
        setTimeout(function () { detectWinner(xSelections) }, 50);

        // Switch players
        // xTurn = !xTurn;
    } else {
        let thatNic = '<img style="vertical-align: bottom;" width="100%" height="100%" src="thatNic.jpg" />'
        elem.innerHTML = thatNic;
        elem.clicked = true;

        // Store selection
        let oSelection = number;
        oSelections.push(oSelection);

        // Check for winner
        setTimeout(function () { detectWinner(oSelections) }, 50);

        // switch players
        // xTurn = !xTurn;
    }
    xTurn = !xTurn;

}
let cellNumber = 0;
for (let i = 0; i < board.rows.length; i++) {
    for (let j = 0; j < board.rows[i].cells.length; j++) {
        board.rows[i].cells[j].clicked = false;
        board.rows[i].cells[j].number = cellNumber;
        cellNumber++;
        board.rows[i].cells[j].onclick = function () {
            squareClickHandler(this, board.rows[i].cells[j].number);
        }
    }
}



// Reset the board -------------------------------

let resetHandler = function () {
    for (let i = 0; i < board.rows.length; i++) {
        for (let j = 0; j < board.rows[i].cells.length; j++) {
            if (board.rows[i].cells[j] !== null) {
                board.rows[i].cells[j].innerHTML = null;
                board.rows[i].cells[j].clicked = false;
            }
        }
    }
    xTurn = !xTurn;

}

reset.onclick = function () {
    resetHandler();
}