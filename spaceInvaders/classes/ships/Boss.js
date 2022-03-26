class Boss extends Ship {
  constructor(position, velocity, hitboxSize, sprite) {
    super(position, velocity, hitboxSize, sprite);
    this.hp = 100;
    this.boss = true;
  }

  shoot() {
    let creator = new Creator();
    return creator.createBullet("enemy", this);
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