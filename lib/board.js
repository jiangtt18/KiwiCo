
const PADDING = 10;


class Board {
  constructor(options) {
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.width = this.canvas.width / 7;
    this.height = this.canvas.height / 6;
    this.diameter = this.width - (PADDING * 2);
    this.radius = this.diameter / 2;
    this.color = 'white';
    this.board = this.initBoard.bind(this);
  }


 initBoard(){
  let grids = new Array(6);
  for(let i = 0; i < 6; i++) {
    grids[i] = new Array(7);
    for(let j = 0; j < 7; j++) {
      grids[i][j]= this.color;
    }
  }
  return grids;
}

 drawCircle(cx, cy, fillcolor) {
  this.ctx.beginPath();
  this.ctx.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = fillcolor;
  this.ctx.fill();
}

 drawDisk(col, row, color) {
  let cx = this.width * (col + 1) - this.radius - PADDING;
  let cy = this.canvas.height - (this.height * (row + 1) - this.radius - PADDING);
  this.drawCircle(cx, cy, 'yellow');
  //players[turn]
}

 drawDisks() {
  for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
          this.drawDisk(col, row, 'yellow'); //board[row][col].color
      }
  }
}

 nextDisk(){
  return this.numberOfDisk('red') > this.numberOfDisk('yellow')
          ? 'yellow'
          : 'red';
}

 numberOfDisk(color){
  return this.board.flat()
              .reduce(function(count, cur) {
                if(cur.color === color){count++;}
                return count;
              },0);
}
}
export default Board;
