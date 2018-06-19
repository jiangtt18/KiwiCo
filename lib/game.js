import Board from './board.js';
import HumanPlayer from './humanPlayer.js';
import ComputerPlayer from './computerPlayer.js';

const PADDING = 10;

class Game {
  constructor(options) {
    this.board = new Board();
    this.players = {
      'red': new HumanPlayer('tingting', options.canvas, this.board.board),
      'yellow': new ComputerPlayer()};
    this.turn = this.board.nextDisc();
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.width = this.canvas.width / 7;
    this.height = this.canvas.height / 6;
    this.diameter = this.width - (PADDING * 2);
    this.radius = this.diameter / 2;
  }

  run(){
    if (!this.board.over){
      this.playTurn();
    }

    if (this.board.hasWon){
      let winner = this.players[this.board.winner];
      console.log(`${winner.name} wins!`);
    }
    else {
      console.log('no one wins');
    }
  }

 playTurn(){
   let currentPlayer = this.players[this.turn];
   let pos = currentPlayer.move(this.board);
   this.turn = this.board.nextDisc();
 }


 drawCircle(cx, cy, fillcolor) {
  this.ctx.beginPath();
  this.ctx.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = fillcolor;
  this.ctx.fill();
}

 drawDisc(col, row, color) {
  let cx = this.width * (col + 1) - this.radius - PADDING;
  let cy = this.canvas.height - (this.height * (row + 1) - this.radius - PADDING);
  this.drawCircle(cx, cy, this.turn);
  switch (color) {
     case 'red':
         this.drawCircle(cx, cy, 'red');
         break;

     case 'yellow':
         this.drawCircle(cx, cy, 'yellow');
         break;

     case 'white':
         this.drawCircle(cx, cy, 'white');
 }

}

 drawDiscs() {
  for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
          this.drawDisc(col, row, this.board.board[row][col]);
      }
  }
}

}

export default Game;
