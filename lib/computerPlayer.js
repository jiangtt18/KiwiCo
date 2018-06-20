class ComputerPlayer {
  constructor(){
    this.name = 'Poshmark';
  }


  move(board){
  this.randomMove(board);
  }


  winnerMove(game, mark){
    // (0..2).each do |row|
    //   (0..2).each do |col|
    //     dup_board = game.board.dup
    //     pos = [row, col]
    //
    //     next unless dup_board.empty?(pos)
    //     dup_board[pos] = mark
    //
    //     return pos if dup_board.winner == mark
    //   end
    // end
    //
    // # no winning move
    // nil
  }

  randomMove(board){
    let samples = [];
    for(let i = 0; i < 6; i++) {
      if(board[0][i] === 'white') {
        samples.push(i);
      }
    }
    console.log('samples', samples);

    if (samples.length === 0 ) {
      return -1;
    } else {
      let randomIdx = Math.floor(Math.random()*samples.length);
      let col = samples[randomIdx];
      for(let i = 5; i >= 0 ; i--){
        if(board[i][col] === 'white'){
          board[i][col] = 'yellow';
          break;
        }
      }
    }


  }
}

export default ComputerPlayer;
