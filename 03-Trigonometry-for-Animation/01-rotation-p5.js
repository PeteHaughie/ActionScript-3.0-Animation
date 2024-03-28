import P5 from 'p5';

const sketch = (p5) => {

  let arrow;
  p5.setup = () => {
    p5.createCanvas(400, 400);
    arrow = new Arrow();
  };

  let mouse = p5.createVector(0, 0);
  let d = p5.createVector(0, 0);
  let radians = 0;
  let degrees = 0;

  p5.mouseMoved = () => {
    mouse.x = p5.mouseX;
    mouse.y = p5.mouseY;
    d.x = mouse.x - p5.width / 2;
    d.y = mouse.y - p5.height / 2;
    radians = p5.atan2(d.y, d.x);
  }

  class Arrow {
    show() {
      p5.fill("#ffff00");
      p5.beginShape();
      p5.vertex(-50, -25);
      p5.vertex(0, -25);
      p5.vertex(0, -50);
      p5.vertex(50, 0);
      p5.vertex(0, 50);
      p5.vertex(0, 25);
      p5.vertex(-50, 25);
      p5.vertex(-50, -25);
      p5.endShape();
    }
  }

  p5.draw = () => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height / 2); // recenters the origin to the center of the canvas
    p5.rotate(radians);
    arrow.show();
  };
};

document.addEventListener('DOMContentLoaded', () => {
  // wait for the page to load before creating the sketch
  const p5 = new P5(sketch);
});
