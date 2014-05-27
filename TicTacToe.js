var turn = 0;

var winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

var squaresPlayed = [9];

var square;

window.onload = function initializeAll() {
	winCombos = new Array();
	squaresPlayed = new Array();

	for (var i = 0; i < 9; i++) {
		squaresPlayed[i] = "Z"; // this means that there is no real value there
	}
}


function canvasClicked(canvasNum) {
	var toPaint = "canvas"+canvasNum;
	console.log(canvasNum);
	if (turn % 2 === 0) {
		square = squaresPlayed[canvasNum - 1];
		if (square === "Z") {
			squaresPlayed[canvasNum - 1] = "X";
		} 
	} else {
		console.log("o");
	}
	turn++;
}

function updateSquaresPlayed(isXTurn) {
	square = squaresPlayed[canvasNum - 1];

	if (square === "Z") {
		if(isXTurn) {
			squaresPlayed[canvasNum - 1] = "X";
			paintX(canvasNum);
		} else {
			squaresPlayed[canvasNum - 1] = "O";
			paintO(canvasNum);
		}	
	} 
	
}

function checkWin() {

} 

