class PlayerShip extends Ship {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite);
    this.player = true;
    this.hp = hp;
  }

  collisionDetection(collidedWith) {
    return (
      this.position.dist(collidedWith.position) <
        collidedWith.hitboxSize.x + this.hitboxSize.x / 2
    );
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
    let creator = new BulletCreator();
    return creator.create("player", this);
  }
}
