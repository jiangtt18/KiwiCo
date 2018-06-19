class ComputerPlayer {
  constructor(){
    this.name = 'Poshmark';
  }


  move(board){
    return this.randomMove(board);
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
    let row = 0;
    let col =  Math.floor(Math.random() * 7);
    while(board[row][col] !== 'white'){
      col =  Math.floor(Math.random() * 7);
    }
    board[row][col] = 'yellow';
  }
}

export default ComputerPlayer;
