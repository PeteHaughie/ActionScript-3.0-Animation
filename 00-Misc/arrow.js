class CreateArrow {
  constructor() {
    this.arrow = new Path2D();
    this.arrow.moveTo(-50, -25);
    this.arrow.lineTo(0, -25);
    this.arrow.lineTo(0, -50);
    this.arrow.lineTo(50, 0);
    this.arrow.lineTo(0, 50);
    this.arrow.lineTo(0, 25);
    this.arrow.lineTo(-50, 25);
    this.arrow.lineTo(-50, -25);
    this.arrow.closePath();
    this.arrow.fillStyle = '0xffff00';
  }
  getArrow() {
    return this.arrow;
  }
}

export default CreateArrow;