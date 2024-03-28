import { CanvasCreator } from '../00-Misc/utilities.js';

const canvas = new CanvasCreator().createCanvas();
const ctx = canvas.getContext('2d');

const scaleX = canvas.width / (Math.PI * 2); // Scale X based on canvas width
const scaleY = canvas.height / 2; // Scale Y based on canvas height

for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
  const x = angle * scaleX;
  const y = Math.sin(angle) * scaleY;
  ctx.lineTo(x, canvas.height / 2 - y);
}
ctx.stroke();

document.addEventListener('DOMContentLoaded', () => {
  document.body.querySelector('main section').appendChild(canvas);
});
