import { CanvasCreator, deg2rad } from "../00-Misc/utilities.js";
import CreateArrow from "../00-Misc/arrow.js";

const canvas = new CanvasCreator().createCanvas();
const ctx = canvas.getContext('2d');

const arrow = new CreateArrow().getArrow();

let radians = 0;
let degrees = 0;
let arrowBoundingRect = 0;

// draw the arrow to the canvas when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
  ctx.fill(arrow);
});

let mouse = {
  x: 0,
  y: 0
};

let arrowCenter = {
  x: 0,
  y: 0
};

let d = {
  x: 0,
  y: 0
};

function handleMousePosition(event) {
  arrowBoundingRect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - arrowBoundingRect.left; // Adjust for canvas position and center
  mouse.y = event.clientY - arrowBoundingRect.top; // Adjust for canvas position and center
  arrowCenter.x = canvas.width / 2;
  arrowCenter.y = canvas.height / 2;
  d.x = mouse.x - arrowCenter.x;
  d.y = mouse.y - arrowCenter.y;
  degrees = Math.atan2(d.y, d.x);
  radians = deg2rad(Math.abs(degrees));

  // apply rotation to the arrow
  ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(0, 0);
  ctx.rotate(degrees);
  ctx.fill(arrow);
  ctx.restore();
}

canvas.addEventListener('mousemove', handleMousePosition);

document.body.querySelector('main section').appendChild(canvas);
