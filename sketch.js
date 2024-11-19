let player;
let enemy;
let points = 0;
let bullets = 10;
let pause = false;
let start = false
let frame = 0;
let x = 200;
let y = 200;
let high = 0;

function setup() {
  createCanvas(400, 400);
  restart()
}

function draw() {
  frame += 1
  if (frame > 1) {
    background(220);
    strokeWeight(2);
    stroke(255, 0, 0)
    line(0, player.y - 55, width, player.y - 55);
    strokeWeight(1);
    if (!enemy.win) {
      bulletsLeft(bullets);
      if (frameCount % 100 == 99) {
        if (bullets < 10) {
          bullets += 1;
        }
      }
    }
    player.show();
    if (keyIsDown(RIGHT_ARROW)) {
      player.right();
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.left();
    }
    if (player.bullet.length > 0) {
      for (let i = 0; i < player.bullet.length; i++) {
        player.bullet[i].show();
      }
    }
    if (player.bullet.length > 0) {
      for (let i = 0; i < player.bullet.length; i++) {
        if (player.bullet[i].y - 15 <= enemy.y + 20) {
          if (player.bullet[i].x >= enemy.x - 10) {
            if (player.bullet[i].x <= enemy.x + 10) {
              enemy.collide(i)
            }
          }
        }
      }
    }
    if (enemy.alive) {
      if (!enemy.win) {
        enemy.show();
      }
    } else {
      if (!enemy.win) {
        points++;
        enemy = new Enemy();
      }
    }
    if (enemy.y + 30 > player.y - 55) {
      enemy.win = true;
      gameOver(points);
    }
  }
}

function keyPressed() {
  if (!pause) {
    if (!enemy.win) {
      if (key == "ArrowUp") {
        if (bullets > 0) {
          bullets -= 1;
          player.shoot();
        }
      }
    }
  }
  if (enemy.win) {
    if (key == "r") {
      points = 0;
      bullets = 10;
      pause = false;
      start = false
      frame = 0;
      x = 200;
      y = 200;
      loop()
      restart()
    }
  }

  if (key == "k") {
    if (!pause) {
      pause = !pause;
      noLoop();
    } else {
      pause = !pause;
      loop();
    }
  }
  
  if (key == "e") {
    exit()
  }
}

function gameOver(points) {
  background(220);
  textAlign(CENTER);
  textStyle(BOLD)
  fill(0);
  if (points > high) {
    high = points
  }
  text("GAME OVER!!!\nYOUR TOTAL POINTS WERE : " + points + "\nHIGH SCORE : " + high, 200, 200)
}

function bulletsLeft(bullets) {
  let x = 10;
  let y = 390;
  for (let i = 0; i < bullets; i++) {
    fill(200, 115, 0);
    rectMode(CENTER);
    noStroke();
    rect(x, y, 5, 10);
    arc(x, y - 5, 5, 10, PI, 0);
    x += 10
  }
}

function mousePressed() {
  if (start) {
    player = new Player(width / 2, 350);
    enemy = new Enemy();
    start = false
    loop();
  }
}

function restart() {

  background(220)
  intro(x, y)
  start = true
  frame = 0
  noLoop();
}