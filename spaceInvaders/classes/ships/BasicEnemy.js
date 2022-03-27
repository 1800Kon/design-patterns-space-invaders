class BasicEnemy extends Ship {
  constructor(position, velocity, hitboxSize, sprite) {
    super(position, velocity, hitboxSize, sprite);
    this.boss = false;
  }

  shoot() {
    let creator = new BulletCreator();
    return creator.create("enemy", this);
  }

  collisionDetection(collidedWith) {
    return (
      this.position.dist(collidedWith.position) <
        collidedWith.hitboxSize.x + this.hitboxSize.x / 2 && collidedWith.friendly === true
    );
  }

  movementUpdate() {
    this.position.add(this.velocity);
    this.specialMovement();
  }
}
