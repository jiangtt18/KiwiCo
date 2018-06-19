class HumanPlayer {
  constructor(name, canvas){
    this.name = name;
    this.canvas = canvas;
    this.getCol = this.getCol.bind(this);
    this.col = 0;
  }

  move(game, _mark){
    // get on press position and calculate the column
    // row, col =
    // [row, col]
  }



  getCol(){
    let that = this.canvas;
    that.onmousedown = function(e){
      this.col = Math.floor(e.offsetX / (that.width/7));
          console.log('getCol', this.col);
    };
    return this.col;
  }
}

export default HumanPlayer;
