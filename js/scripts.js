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

$(document).ready(function() {
  var turncount = 1;
  $("td").click(function() {
      if (turncount % 2 === 0) {
        $(this).text("O");
      } else {
        $(this).text("X");
      }
      turncount +=1;
  });
});
