

let board = document.getElementById('board');

let squareClickHandler = function (elem) {
    elem.innerHTML = 'X';
}

for (let i = 0; i < board.rows.length; i++) {
    for (let j = 0; j < board.rows[i].cells.length; j++) {
        board.rows[i].cells[j].onclick = function () {
            squareClickHandler(this);
        }
    }
}



// square.addEventListener('click', squareClickHandler.bind(this));

console.log("HELLOOOOO")
