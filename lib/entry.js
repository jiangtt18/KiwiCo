
import Game from './game.js';
import HumanPlayer from './humanPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let game = new Game({ canvas: canvas,
  ctx: ctx });

  game.drawDiscs();
  game.run();

});
