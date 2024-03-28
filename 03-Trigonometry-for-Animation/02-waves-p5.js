import P5 from 'p5';

const sketch = (p5) => {
  let scaleX;
  let scaleY;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    scaleX = p5.width / (Math.PI * 2); // Scale X based on canvas width
    scaleY = p5.height / 2; // Scale Y based on canvas height
    p5.noLoop();
  }

  p5.draw = () => {
    p5.background(255);
    p5.stroke(0);
    p5.translate(0, p5.height / 2); // recenters the origin to the center of the canvas
    p5.beginShape();
    for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
      const x = angle * scaleX;
      const y = -Math.sin(angle) * scaleY;
      p5.vertex(x, y);
    }
    p5.endShape();
  }

}

document.addEventListener('DOMContentLoaded', () => {
  // wait for the page to load before creating the sketch
  const p5 = new P5(sketch);
});