class HumanPlayer {
  constructor(name, canvas,board){
    this.name = name;
    this.canvas = canvas;
  }


  move(board){
    let that = this;
     that.canvas.onmousedown = (e) => {
       let pos = [];
       let col = Math.floor(e.offsetX / (that.canvas.width/7));
       let row = that.getRow(col,board);
       if(row >= 0 ) {
         board[row][col] = 'red';
       } else {
         alert('invalid move');
       }

    };

  }


  getRow(col, board){
    for(var i = 5; i >= 0 ; i--) {
      if(board[i][col] === 'white') {
        break;
      }
    }

    if(board[0][col]!== 'white'){
      return -1;
    } else {
      return i;
    }

  }


}

export default HumanPlayer;
