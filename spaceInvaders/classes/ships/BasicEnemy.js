class BasicEnemy extends Ship {
  constructor(position, velocity, hitboxSize, sprite) {
    super(position, velocity, hitboxSize, sprite);
  }

  shoot() {
    let creator = new Creator();
    return creator.createBullet("enemy", this);
  }

  collisionDetection(collidedWith) {
    return (
      this.position.dist(collidedWith.position) <
        collidedWith.hitboxSize.x / 2 + 5 && collidedWith.friendly === true
    );
  }

  movementUpdate() {
    this.position.add(this.velocity);
    this.specialMovement();
  }
}
