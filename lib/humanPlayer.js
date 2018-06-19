class HumanPlayer {
  constructor(name, canvas,board){
    this.name = name;
    this.canvas = canvas;
    this.board = board;
  }


  move(){
    let that = this;
    console.log('preboard',this.board);
    that.canvas.onmousedown = function(e){

      let col = Math.floor(e.offsetX / (that.canvas.width/7));
      let row = that.getRow(col,that.board);
      that.board[row][col] = 'red';
      console.log('next', that.board);
  
    };

  }

  getRow(col, board){
    for(var i = 5; i >=0 ; i--) {
      if(board[i][col] === 'white') {
        break;
      }
    }
    return i;
  }


}

export default HumanPlayer;
