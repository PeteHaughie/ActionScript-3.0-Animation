class CanvasCreator {
  constructor(width = 300, height = 300) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
  }
  
  createCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    return this.canvas;
  }
}

export default CanvasCreator;
