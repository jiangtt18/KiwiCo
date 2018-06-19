import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  var players = {'red': 'computerPlayer', 'yellow': 'humanPlayer'};
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let game = new Game({ canvas: canvas,
  ctx: ctx });
  // var turn = board.nextMark();
  game.drawDisks();
});
