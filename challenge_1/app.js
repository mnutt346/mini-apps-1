

let board = document.getElementById('board');
let reset = document.getElementById('reset-button');

let xTurn = true;

// Update squares on click ---------------------------------

let squareClickHandler = function (elem) {
    if (elem.clicked) {
        return;
    } else if (xTurn) {
        let thisNic = '<img style="vertical-align: bottom;" width="100%" height="100%" src="thisNic.jpg" />'
        elem.innerHTML = thisNic;
        elem.removeEventListener('click', arguments.callee, true);
        elem.clicked = true;
        xTurn = !xTurn;
    } else {
        let thatNic = '<img style="vertical-align: bottom;" width="100%" height="100%" src="thatNic.jpg" />'
        elem.innerHTML = thatNic;
        elem.clicked = true;
        xTurn = !xTurn;
    }
}

for (let i = 0; i < board.rows.length; i++) {
    for (let j = 0; j < board.rows[i].cells.length; j++) {
        board.rows[i].cells[j].clicked = false;
        board.rows[i].cells[j].onclick = function () {
            squareClickHandler(this);
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

}

reset.onclick = function () {
    resetHandler();
}


//



console.log("HELLOOOOO")
