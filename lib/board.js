
class Board {
  constructor(options) {
    this.color = 'white';
    this.board = this.initBoard.bind(this)();
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


 nextDisc(){
   console.log('here');
  return this.numberOfDisc('red') > this.numberOfDisc('yellow')
          ? 'yellow'
          : 'red';
}

 numberOfDisc(color){

  let a = this
        .board
        .reduce((acc, val) => acc.concat(val), [])
        .reduce(function(count, cur) {
          if(cur.color === color){count++;}
          return count;
        },0);
  console.log('numCol', a);
  return a;
  }

  checkRows(){

  }

  checkCols(){

  }

  checkDiag(){

  }

  openPosition(){

  }

  isEmpty(pos){

  }

  isTies(){

  }

  isOver(){
    return false;
  }

  winner(){

  }

  hasWon(){

  }
}
export default Board;
