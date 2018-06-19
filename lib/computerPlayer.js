class ComputerPlayer {
  constructor(name){
    this.name = 'Poshmark';
  }


  move(game, mark){
    return this.winnerMove(game, mark) || this.randomMove(game);
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

  randomMove(game){
    let board = game.board;

    // loop do
    //   range = (0..2).to_a
    //   pos = [range.sample, range.sample]
    //
    //   return pos if board.empty?(pos)
  }
}

export default ComputerPlayer;
