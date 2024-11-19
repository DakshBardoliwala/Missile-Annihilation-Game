class Enemy {
  constructor() {
    this.x = random(15, width);
    this.y = 0;
    this.alive = true;
    this.win = false;
  }

  show() {
    noStroke();
    fill(200, 10, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 30);
    arc(this.x, this.y + 15, 20, 30, 0, PI);
    fill(75);
    quad(this.x - 5, this.y - 15, this.x + 5, this.y - 15, this.x + 10, this.y - 25, this.x - 10, this.y - 25)
    this.y += 1.5;
  }

  collide(index) {
    this.alive = false;
    player.bullet.splice(index, 1)
  }
}