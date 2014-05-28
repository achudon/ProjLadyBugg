var turn = 0;

var winCombos;

var squaresPlayed; 

var square;

var xSymbol;

var ySymbol;

var c;

var cxt;

window.onload = function initializeAll() {
	winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
	squaresPlayed = new Array();

	xSymbol = new Image();
	xSymbol.src = "Alyssa.jpg";
	xSymbol.width = 50;
	xSymbol.height = 50;
	ySymbol = new Image();
	ySymbol.src = "Phteven.jpg";
	ySymbol.width = 50;
	ySymbol.height = 50;


	for (var i = 0; i < 9; i++) {
		squaresPlayed[i] = "Z"; // this means that there is no real value there
	}
}

function canvasClicked(canvasNum) {
	if (squaresPlayed[canvasNum - 1] === "Z") {
		isXTurn = (turn % 2 === 0);
		updateSquaresPlayed(isXTurn, canvasNum);
	}
	if (checkWin()) {
		var player;
		if (turn % 2 === 0) {
			player = "X";
		} else {
			player = "O";
		}
		alert("Player " + player + " won!");
	} else if (checkDraw()) {
		alert("It's a draw!")
	}

	turn++;
}

function updateSquaresPlayed(isXTurn, canvasNum) {
	if(isXTurn) {
		squaresPlayed[canvasNum - 1] = "X";
		paintX(canvasNum);
	} else {
		squaresPlayed[canvasNum - 1] = "O";
		paintO(canvasNum);
	}		
}

function paintX(canvasNum) {
	c = document.getElementById("canvas"+canvasNum);
	cxt = c.getContext("2d");
	cxt.drawImage(xSymbol, 50, 50);
}

function paintO(canvasNum) {
	c = document.getElementById("canvas"+canvasNum);
	cxt = c.getContext("2d");
	cxt.drawImage(ySymbol, 50, 50);
}

/*

function paintX(canvasNum) {
	c = document.getElementById("canvas"+canvasNum);
	cxt = c.getContext("2d");
	 
     cxt.beginPath();
     cxt.moveTo(10, 10);
     cxt.lineTo(40, 40);
     cxt.moveTo(40, 10);
     cxt.lineTo(10, 40);
     cxt.stroke();
     cxt.closePath();

}

function paintO(canvasNum) {
	c = document.getElementById("canvas"+canvasNum);
	cxt = c.getContext("2d");
	cxt.beginPath();
	cxt.arc(25, 25, 20, 0, Math.PI*2);
	cxt.stroke();
	cxt.closePath();
}
*/

function checkDraw() {
	var draw = true;
	console.log(squaresPlayed.length);
	for (var i = 0; i < squaresPlayed.length; i++) {
		if (squaresPlayed[i] == "Z") {
			draw = false;
			break;
		}
	}
	console.log(draw);
	return draw;
}

function checkWin() {
	var won; 
	var symbol;

	if (turn % 2 === 0) {
		symbol = "X";
	} else {
		symbol = "O";
	}

	for (var i = 0; i < winCombos.length; i++) {
		won = true;
		for (var j = 0; j < 3; j++) {
			if (squaresPlayed[winCombos[i][j]-1] !== symbol) {
				won = false;
				continue;
			}
		}
		if (won) {
			break;
		}
	}
	/*
	if (!won) {
		var empty = true;
		for (var i = 0; i < squaresPlayed.length; i++) {
			if (squaresPlayed[i] === "Z") {

			}
		}
	} */
	return won;
} 
