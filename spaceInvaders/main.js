function preload() {
  game = new Game();
}

function setup() {
  createCanvas(1000, 800);
  bg = loadImage("assets/sprites/PNG/Default_size/Tiles/tile_73.png");
  game.init();
}

function keyPressed() {
  if (keyCode === 32) {
    this.game.shootBullet();
  }
}

function draw() {
  background(bg);
  game.display();
}
