

let board = document.getElementById('board');

let xTurn = true;

// Update squares on click

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





console.log("HELLOOOOO")
