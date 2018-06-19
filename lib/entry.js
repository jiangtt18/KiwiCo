
import Game from './game.js';
import HumanPlayer from './humanPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  var players = {'red': 'computerPlayer', 'yellow': 'humanPlayer'};
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let game = new Game({ canvas: canvas,
  ctx: ctx });

  game.drawDiscs();
  game.players.red.move();

});
