# Connect 4

![Index](./asset/images/connect4.gif)

[Live Version]( https://jiangtt18.github.io/connect-four/)


# Description

Connect Four is a two-player connection game in which the human players (you) and computer player (an AI called Poshmark) take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs

# Features
  The game framework was separated into Board class, ComputerPlayer class and Game class. Each class handled its own logic to keep the code reusable and manageable.

  The algorithm to detect 4 connected discs is by setting up two pointers going opposite ways. This will leave us to check 4 different paths (South only; West/East; NorthWest/SouthEast; NorthEast/SouthWest). Each check runs O(n) time where n is the number of same colored discs on that closePath, and max number of n is 6 (3 at each directions for that path). Please refer to code below for details.

  ```Javascript
  hasWon(row, col, board, player){

    function checkDirection(direction) {
      let total = 0;
      let i = row + direction.i;
      let j = col + direction.j;
      while (i >= 0 && i < 6 && j >= 0 && j < 7
              && board[i][j]=== player) {
        console.log(i, j);

        total++;
        i += direction.i;
        j += direction.j;
        // min requirment for 4 connected discs at one dir is 3 (exclude itself)
        if(total === 3) return total;
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
      // only check disc below. there should not be any discs above it
      return checkWin({i: 0, j: -1}, {i: 0, j: 0});
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
```

# Technologies
### Javascript/Canvas
This game was made with Javascript. The board and discs were drew by canvas.

### HTML5/CSS3
All stylings used CSS3 with HTML5. Simplicity and minimalism style were
applied to fit the game environment due to limited time offered.

### Webpack
Webpack was used to bundle up different files and export all in the program.



# Future Direction
* Develop algorithm to detect winning move for the computer player
* Create different levels for users
* Build backend to track of different winners on the leaderboard
