class PlayerShip extends Ship {
  constructor(position) {
    super(position);
  }
  preload() {
    this.sprite = loadImage("assets/sprites/PNG/Ships/");
  }

  movement() {
    if (keyIsDown(LEFT_ARROW)) {
      this.position.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.position.x += 5;
    }
  }

  shoot() {
    let creator = new Creator();
    if (keyIsDown(32)) {
        creator.createBullet("player", this);
    }
  }
}
