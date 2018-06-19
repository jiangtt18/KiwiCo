import Board from './board.js';

document.addEventListener('DOMContentLoaded', () => {
  var players = {'red': 'computerPlayer', 'yellow': 'humanPlayer'};
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let board = new Board({ canvas: canvas,
  ctx: ctx });
  // var turn = board.nextMark();
  board.drawDisks();
});
