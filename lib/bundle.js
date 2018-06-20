/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__humanPlayer_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__humanPlayer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__humanPlayer_js__);




document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */]({ canvas: canvas,
        ctx: ctx });

    let background = new Image(700, 400);
    background.src = "asset/images/connections.png";

    background.onload = function () {
        ctx.fillStyle = "#fffded";

        ctx.font = "50px Arial";
        ctx.drawImage(background, 0, 0, background.width, background.height, 0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.rect(0, 150, canvas.width, 200);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.fillText("Press space to start! ", 50, 250);
    };

    background.onload();

    document.addEventListener("keydown", e => {
        if (e.keyCode === 32) {
            game.drawDiscs();
            game.move();
        }
    });
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__humanPlayer_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__humanPlayer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__humanPlayer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computerPlayer_js__ = __webpack_require__(4);




const PADDING = 10;

class Game {
  constructor(options) {
    this.board = new __WEBPACK_IMPORTED_MODULE_0__board_js__["a" /* default */]();
    this.players = {
      'red': this,
      'yellow': new __WEBPACK_IMPORTED_MODULE_2__computerPlayer_js__["a" /* default */]() };
    this.isOver = false;
    this.currentPlayer = 'red';
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.width = this.canvas.width / 7;
    this.height = this.canvas.height / 6;
    this.diameter = this.width - PADDING * 2;
    this.radius = this.diameter / 2;
    this.getMousePos = this.getMousePos.bind(this);
  }

  move() {
    if (!this.isOver && !this.board.isTie()) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDiscs();
      this.canvas.addEventListener('click', this.getMousePos, false);
    } else {

      this.drawGameOverScreen('Everyone');
    }
  }

  getMousePos(e) {

    let col = Math.floor(e.offsetX / this.width);
    let row = this.getRow(col);

    if (this.board.isValidMove(row, col)) {

      let currentPlayer = this.players['red'];
      this.currentPlayer = 'red';
      this.board.grid[row][col] = 'red';
      this.drawDiscs();

      if (this.board.hasWon(row, col, this.board.grid, 'red')) {
        this.drawGameOverScreen('You');
        this.isOver = true;
      } else {
        currentPlayer = this.players['yellow'];
        this.currentPlayer = 'yellow';
        let pos = currentPlayer.move(this.board.grid);
        this.drawDiscs();
        console.log(pos);
        if (this.board.hasWon(pos[0], pos[1], this.board.grid, 'yellow')) {
          this.drawGameOverScreen('Poshmark');
          this.isOver = true;
        }
      }
    } else {
      alert('invalid move');
    }
  }
  getRow(col) {
    if (this.board.grid[0][col] !== 'white') {
      return -1;
    } else {
      for (var i = 5; i >= 0; i--) {
        if (this.board.grid[i][col] === 'white') {
          return i;
        }
      }
    }
  }

  drawCircle(cx, cy, fillcolor) {
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = fillcolor;
    this.ctx.fill();
  }

  drawDisc(col, row, color) {
    let cx = this.width * (col + 1) - this.radius - PADDING;
    let cy = this.height * (row + 1) - this.radius - PADDING;
    this.drawCircle(cx, cy, this.currentPlayer);
    switch (color) {
      case 'red':
        this.drawCircle(cx, cy, 'red');
        break;

      case 'yellow':
        this.drawCircle(cx, cy, 'yellow');
        break;

      case 'white':
        this.drawCircle(cx, cy, 'white');
    }
  }

  drawDiscs() {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        this.drawDisc(col, row, this.board.grid[row][col]);
      }
    }
  }

  drawGameOverScreen(player) {
    //game over background screen

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 0;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#fffded";
    this.ctx.rect(0, 150, this.canvas.width, 200);
    this.ctx.fill();
    this.ctx.closePath();

    //game over heading
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Game Over! ", 170, 200);

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(player + ' won', 230, 250);

    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Press space to restart!", 170, 300);

    document.addEventListener("keydown", e => {
      if (e.keyCode === 32) {
        document.location.reload();
      }
    }, false);

    requestAnimationFrame(this.drawGameOverScreen);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Board {
  constructor(options) {
    this.makeGrid = this.makeGrid.bind(this);
    this.grid = this.makeGrid();
  }

  makeGrid() {
    let grids = new Array(6);
    for (let i = 0; i < 6; i++) {
      grids[i] = new Array(7);
      for (let j = 0; j < 7; j++) {
        grids[i][j] = 'white';
      }
    }
    return grids;
  }

  hasWon(row, col, board, player) {
    function checkDirection(direction) {
      let total = 0;
      let i = row + direction.i;
      let j = col + direction.j;
      while (i >= 0 && i < 6 && j >= 0 && j < 7 && board[i][j] === player) {
        console.log(i, j);

        total++;
        i += direction.i;
        j += direction.j;
      }
      return total;
    }
    function checkWin(directionA, directionB) {
      const total = 1 + checkDirection(directionA) + checkDirection(directionB);
      if (total >= 4) {
        return true;
      } else {
        return false;
      }
    }

    function checkRows() {
      return checkWin({ i: 0, j: -1 }, { i: 0, j: 1 });
    }

    function checkCols() {
      return checkWin({ i: -1, j: 0 }, { i: 1, j: 0 });
    }

    function checkDiagonalBLtoTR() {
      return checkWin({ i: 1, j: -1 }, { i: 1, j: 1 });
    }

    function checkDiagonalTLtoBR() {
      return checkWin({ i: 1, j: 1 }, { i: -1, j: -1 });
    }

    return checkRows() || checkCols() || checkDiagonalBLtoTR() || checkDiagonalTLtoBR();
  }

  isEmptyPos(row, col) {
    if (!this.isValidMove(row, col)) {
      alert('Is not valid position!');
    }
    return this.grid[row][col] === 'white';
  }

  isTie() {
    for (let rowIdx = 0; rowIdx < 6; rowIdx++) {
      for (let colIdx = 0; colIdx < 7; colIdx++) {
        if (this.isEmptyPos(rowIdx, colIdx)) {
          return false;
        }
      }
    }

    return true;
  }

  isValidMove(row, col) {
    return 0 <= row && row < 6 && 0 <= col && col < 7;
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Board);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ComputerPlayer {
  constructor() {
    this.name = 'Poshmark';
  }

  move(board) {
    let possibleRows = this.openRows(board);
    if (possibleRows.length === 0) {
      alert('no space!');
    } else {
      let randomIdx = Math.floor(Math.random() * possibleRows.length);
      let col = possibleRows[randomIdx];
      return this.openSpace(board, col);
    }
  }

  openRows(board) {
    let samples = [];
    for (let i = 0; i < 6; i++) {
      if (board[0][i] === 'white') {
        samples.push(i);
      }
    }
    return samples;
  }

  openSpace(board, col) {
    for (let row = 5; row >= 0; row--) {
      if (board[row][col] === 'white') {
        board[row][col] = 'yellow';
        return [row, col];
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (ComputerPlayer);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map