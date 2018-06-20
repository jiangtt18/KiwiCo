
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

hasWon (row,col, board, player){
 function checkDirection(direction) {
      let total = 0;
      let i = row + direction.i;
      let j = col + direction.j;
      while (i >= 0 && i < 6 && j >= 0 && j < 7
              && board[row][col]=== player) {
        total++;
        i += direction.i;
        j += direction.j;
      }
      return total;
}
  function checkWin(directionA, directionB) {
    const total = 1 +
      checkDirection(directionA) +
      checkDirection(directionB);
    if (total >= 4) {
      return true;
    } else {
      return false;
    }
  }

  function checkRows(){
    return checkWin({i: 0, j: -1}, {i: 0, j: 1});
  }

  function checkCols(){
    return checkWin({i: -1, j: 0}, {i: 1, j: 0});
  }

  function checkDiagonalBLtoTR() {
      return checkWin({i: 1, j: -1}, {i: 1, j: 1});
    }

  function checkDiagonalTLtoBR() {
      return checkWin({i: 1, j: 1}, {i: -1, j: -1});
  }

  return checkRows() ||
      checkCols() ||
      checkDiagonalBLtoTR() ||
      checkDiagonalTLtoBR();
  }

  openPosition(){

  }


  isEmptyPos(row,col){
    if (!this.isValidPos(row,col)) {
      alert('Is not valid position!');
    }
    return (this.board[row][col] === 'white');
  }



  isOver(){
    if (this.hasWon()) {
      return true;
    }

    for (let rowIdx = 0; rowIdx < 6; rowIdx++) {
      for (let colIdx = 0; colIdx < 7; colIdx++) {
        if (this.isEmptyPos(rowIdx, colIdx)) {
          return false;
        }
      }
    }

    return true;
  }

  isValidMove(row, col){
    return 0 <= row &&
    (row < 6) &&
    (0 <= col) &&
    (col < 7);
  }


}
export default Board;
