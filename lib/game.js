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
     this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.drawDiscs();
      this.canvas.addEventListener('click',this.getMousePos, false);
    } else {

      this.drawGameOverScreen('Everyone');
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
       this.drawGameOverScreen('You');
       this.isOver = true;
     } else {
       currentPlayer = this.players['yellow'];
       this.currentPlayer = 'yellow';
       let pos = currentPlayer.move(this.board.grid);
       this.drawDiscs();
       console.log(pos);
       if(this.board.hasWon(pos[0], pos[1], this.board.grid, 'yellow')){
         this.drawGameOverScreen('Poshmark');
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

  drawGameOverScreen(player) {
    //game over background screen

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 0;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#fffded";
    this.ctx.rect(0,150,this.canvas.width,200);
    this.ctx.fill();
    this.ctx.closePath();

    //game over heading
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Game Over! ", 170, 200);

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(player + ' won', 230, 250);


    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press space to restart!", 170, 300);

    document.addEventListener("keydown", (e) => {
      if(e.keyCode === 32) {
        document.location.reload();
      }
    }, false);

    requestAnimationFrame(this.drawGameOverScreen);
  }
}

export default Game;
