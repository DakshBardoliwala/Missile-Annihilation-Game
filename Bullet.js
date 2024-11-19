class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    if (this.y > 0) {
      fill(200, 115, 0);
      rectMode(CENTER);
      noStroke();
      rect(this.x, this.y, 5, 10);
      arc(this.x, this.y - 5, 5, 10, PI, 0);
      this.y -= 10;
    } else {
      player.bullet.shift();
    }
  }
}