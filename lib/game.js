import Board from './board.js';
import HumanPlayer from './humanPlayer.js';
import ComputerPlayer from './computerPlayer.js';

const PADDING = 10;

class Game {
  constructor(options) {
    this.board = new Board();
    this.players = {
      'red': this,
      'yellow': new ComputerPlayer()};

    this.currentPlayer = 'red';
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.width = this.canvas.width / 7;
    this.height = this.canvas.height / 6;
    this.diameter = this.width - (PADDING * 2);
    this.radius = this.diameter / 2;
    this.getMousePos = this.getMousePos.bind(this);
  }

  run(){
    this.drawDiscs();
    this.playTurn();
    let i = 0;
    // while (!this.board.over && i < 3){
    while(i < 3) {
      i++;
      this.playTurn();
    }


    // if (this.board.hasWon){
    //   let winner = this.players[this.board.winner];
    //   console.log(`${winner.name} wins!`);
    // }
    // else {
    //   console.log('no one wins');
    // }
  }


 move(){
   this.canvas.addEventListener('click',this.getMousePos, false);
 }

 getMousePos(e){
   let pos = [];
   let col = Math.floor(e.offsetX / this.width);
   console.log(this);
   let row = this.getRow(col);

   if(this.isValidMove(row, col)) {

     let currentPlayer = this.players['red'];
     this.currentPlayer = 'red';
     this.board.board[row][col] = 'red';
     this.drawDiscs();

     currentPlayer = this.players['yellow'];
     this.currentPlayer = 'yellow';
     currentPlayer.move(this.board.board);
     this.drawDiscs();

   } else {
     alert('invalid move');
   }

 }
 getRow(col){
   if(this.board.board[0][col]!== 'white'){
     return -1;
   } else {
     for(var i = 5; i>=0 ; i--) {
       if(this.board.board[i][col] === 'white') {
        return i;
       }
     }
   }
  }

  isValidMove(row, col){
    return row >= 0 && col <= 6;
  }

 drawCircle(cx, cy, fillcolor) {
  this.ctx.beginPath();
  this.ctx.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = fillcolor;
  this.ctx.fill();
}

 drawDisc(col, row, color) {
  let cx = this.width * (col + 1) - this.radius - PADDING;
  let cy =this.height * (row + 1) - this.radius - PADDING;
  this.drawCircle(cx, cy, this.currentPlayer);
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
