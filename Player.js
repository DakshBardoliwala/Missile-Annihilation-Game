class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bullet = [];
  }

  show() {
    noStroke();
    rectMode(CENTER);
    fill(25, 100, 0);
    rect(this.x, this.y, 30, 50, 10);
    fill(45);
    rect(this.x + 15, this.y, 10, 55, 2);
    rect(this.x - 15, this.y, 10, 55, 2);
    fill(50, 60, 0);
    ellipse(this.x, this.y, 25, 35);
    fill(50, 60, 0);
    rect(this.x, this.y - 25, 5, 50);
    fill(35);
    rect(this.x, this.y - 45, 7, 10, 2);
  }

  right() {
    if (this.x <= width - 3) {
      this.x += 3;
    }
  }

  left() {
    if (this.x >= 3)
      this.x -= 3;
  }

  shoot() {
    this.bullet.push(new Bullet(this.x, this.y - 55))
  }
}