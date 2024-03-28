class CreateArrow {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.namespace = 'http://www.w3.org/2000/svg';
    this.path = 'M70.115 0L120 59.803 70 120V75H0V45h70l.115-45z';
    this.viewBox = '0 0 100 100';
  }
  generateArrow() {
    const arrow = document.createElementNS(this.namespace, 'svg');
          arrow.setAttributeNS(null, 'xmlns', this.namespace);
          arrow.setAttributeNS(null, 'height', this.height);
          arrow.setAttributeNS(null, 'width', this.width);
          arrow.setAttributeNS(null, 'viewBox', this.viewBox);
          arrow.setAttributeNS(null, 'path', this.path);
    const path = document.createElementNS(this.namespace, 'path');
          path.setAttributeNS(null, 'd', this.path);
    arrow.appendChild(path);
    return arrow;
  }
}

export default CreateArrow;