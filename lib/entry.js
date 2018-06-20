
import Game from './game.js';
import HumanPlayer from './humanPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let game = new Game({ canvas: canvas,
  ctx: ctx });

  let background = new Image(700,400);
      background.src = "asset/images/connections.png";

      background.onload = function() {
      ctx.fillStyle = "#fffab5";

      ctx.font = "50px Arial";
      ctx.drawImage(background, 0, 0, background.width, background.height,
        0, 0, canvas.width, canvas.height);


        ctx.beginPath();
        ctx.rect(0,150,canvas.width,200);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.fillText("Press space to start! ", 50, 250);
    };

    background.onload();

    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 32) {
          game.drawDiscs();
          game.move();
        }
    });



});
