import CanvasCreator from "../00-Misc/canvas.js";
import { rad2deg } from "../00-Misc/utilities.js";

const canvas = new CanvasCreator(800, 600).createCanvas();
const ctx = canvas.getContext('2d');

const arrow = document.createElement('img');
      arrow.src = "/images/arrow.svg";
      arrow.width = 100;
      arrow.height = 100;

      arrow.onload = function() {
        ctx.drawImage(arrow, (ctx.canvas.width / 2) - (arrow.width / 2), (ctx.canvas.height / 2) - (arrow.height / 2), 100, 100);
      }

let mouse = {
  x: 0,
  y: 0
};

let radians = 0;
let degrees = 0;

function handleMousePosition(event) {
  mouse.x = event.clientX - arrow.width;
  mouse.y = event.clientY - arrow.height;
  // radians = Math.atan(mouse.y / mouse.x);
  radians = Math.atan2(mouse.y, mouse.x);
  degrees = rad2deg(radians);
  // apply rotation to the arrow
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
  ctx.rotate(degrees);
  ctx.drawImage(arrow, - (arrow.width / 2), - (arrow.height / 2), 100, 100);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

canvas.addEventListener('mousemove', handleMousePosition);

document.body.querySelector('main section').appendChild(canvas);
