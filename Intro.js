function intro(x, y) {
  textAlign(LEFT)
  background(220)
  noStroke();
  rectMode(CENTER);
  fill(25, 100, 0);
  rect(x, y, 30, 50, 10);
  fill(45);
  rect(x + 15, y, 10, 55, 2);
  rect(x - 15, y, 10, 55, 2);
  fill(50, 60, 0);
  ellipse(x, y, 25, 35);
  fill(50, 60, 0);
  rect(x, y - 25, 5, 50);
  fill(35);
  rect(x, y - 45, 7, 10, 2);
  strokeWeight(1)
  stroke(0)
  line(x + 25, y, x + 75, y)
  triangle(x + 75, y, x + 65, y + 5, x + 65, y - 5)
  strokeWeight(1)
  text("To Move Right,\nPress Right Arrow", x + 35, y + 15)
  strokeWeight(1)
  stroke(0)
  line(x - 25, y, x - 75, y)
  triangle(x - 75, y, x - 65, y + 5, x - 65, y - 5)
  strokeWeight(1)
  text("To Move Left,\nPress Left Arrow", x - 125, y + 15)
  strokeWeight(1)
  stroke(0)
  line(x, y - 55, x, y - 90)
  triangle(x, y - 90, x - 5, y - 80, x + 5, y - 80)
  strokeWeight(1)
  text("To Shoot Bullet,\nPress Up Arrow", x + 10, y - 50)
  text("To Pause / Resume the Game, Press K", 100, 300)
  text("To Restart, Press R (Can Only Be Used After Game Is Over)", 50, 350)
  text("Press Anyehere To Start", 140, 50)
  text("Press E To EXIT The Game", 135, 70)
}