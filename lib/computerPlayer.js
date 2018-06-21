class ComputerPlayer {
  constructor(){
    this.name = 'Poshmark';
  }

  move(board){
    let possibleRows = this.openRows(board);
    if (possibleRows.length === 0 ) {
      alert('no space!');
    } else {
    let randomIdx = Math.floor(Math.random()* possibleRows.length);
    let col = possibleRows[randomIdx];
    return this.openSpace(board,col);
    }
  }

  openRows(board){
    let samples = [];
    for(let i = 0; i < 6; i++) {
      if(board[0][i] === 'white') {
        samples.push(i);
      }
    }
    return samples;
  }

  openSpace(board, col){
    for(let row = 5; row >= 0 ; row--){
      if(board[row][col] === 'white'){
        board[row][col] = 'yellow';
        return [row,col];
      }
    }
  }

}



export default ComputerPlayer;
