// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

var playerOne = "X";
var playerTwo = "O";
var $boxes = $('.box');
var turn = playerOne;
var moves = 0;
var getWinner = (playerOne || playerTwo);
var resetGame = function () {
  $boxes.removeClass ("X");
  $boxes.removeClass ("O");
};

var changeTurn = function () {
  if (turn ==="X") {
      turn = "O";
  } else if (turn ==="O") {
    turn = "X";
  }
};


$ ('#reset').on('click', function () {
  resetGame();
});
$boxes.on('click', function() {
  if ($(this).text() === "") {
    $(this).text (turn);
      changeTurn();
    $(this).addClass(turn);
    moves += 1;

var winner = getWinner ();
if (winner) {
  alert("Player " + winner + " won!");
  resetGame();
} else if (moves < 9) {
  changeTurn ();
} else {
  alert("Tie Game!!!");
  resetGame ();
}
}

});


});
