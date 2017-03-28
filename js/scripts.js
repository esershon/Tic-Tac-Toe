// function Game(player1, player2, board, currentTurn){
//   this.player1 = player1,
//   this.player2 = player2,
//   this.board = board,
//   this.currentTurn = currentTurn
// }
//
// function Board(spaces, winStatus){
//   this.spaces = spaces,
//   this.winStatus = winStatus
// }
//
// function Space(xCoordinate, yCoordinate, mark){
//   this.xCoordinate = xCoordinate,
//   this.yCoordinate = yCoordinate,
//   this.mark = mark
// }
//
// function Player(xOrO){
//   this.xOrO = xOrO
// }
//
// var TicTacToe = new Game (player1, player2, board, currentTurn);
// TicTacToe.createNew
//
// Game.prototype.createNew = function(){
//   var playerX = this.player1,
//   var playerO = this.player2,
//   var newBoard = this.board,
//   var currentTurn = this.currentTurn
// }
var turncount = 1
$(document).ready(function() {
  $("td").click(function() {
    for (i = 0; i < turncount; i++) {
      if (i % 2) {
        $(this).text("O");
        console.log("o");
      } else {
        $(this).text("X");
        console.log("x");
      }
    }
  });
});
