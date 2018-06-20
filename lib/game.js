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
    this.isOver = false;
    this.currentPlayer = 'red';
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.width = this.canvas.width / 7;
    this.height = this.canvas.height / 6;
    this.diameter = this.width - (PADDING * 2);
    this.radius = this.diameter / 2;
    this.getMousePos = this.getMousePos.bind(this);
  }

 move(){
   if(!this.isOver && !this.board.isTie()) {
      this.canvas.addEventListener('click',this.getMousePos, false);
    } else {
      alert('end');
    }
}

 getMousePos(e){

   let col = Math.floor(e.offsetX / this.width);
   let row = this.getRow(col);

   if(this.board.isValidMove(row, col)) {

     let currentPlayer = this.players['red'];
     this.currentPlayer = 'red';
     this.board.grid[row][col] = 'red';
     this.drawDiscs();

     if(this.board.hasWon(row, col, this.board.grid, 'red')){
       alert('you win');
       this.isOver = true;
     } else {
       currentPlayer = this.players['yellow'];
       this.currentPlayer = 'yellow';
       let pos = currentPlayer.move(this.board.grid);
       this.drawDiscs();
       console.log(pos);
       if(this.board.hasWon(pos[0], pos[1], this.board.grid, 'yellow')){
         alert('I win');
         this.isOver = true;
       }

     }
   } else {
     alert('invalid move');
   }

 }
 getRow(col){
   if(this.board.grid[0][col]!== 'white'){
     return -1;
   } else {
     for(var i = 5; i>=0 ; i--) {
       if(this.board.grid[i][col] === 'white') {
        return i;
       }
     }
   }
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
          this.drawDisc(col, row, this.board.grid[row][col]);

      }
  }
}

}

export default Game;
