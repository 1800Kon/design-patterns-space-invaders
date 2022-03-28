class Ship {
  constructor(position, velocity, hitboxSize, sprite) {
    this.position = position;
    this.velocity = velocity;
    this.hitboxSize = hitboxSize;
    this.sprite = sprite;
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    image(this.sprite, 0, 0, this.hitboxSize.x, this.hitboxSize.y);
    pop();
  }

  // check the position of the ship relative to the walls to know when to change direction and go down a level

  specialMovement() 
  {
    if (this.position.x < 15) {
      this.velocity.set(1, 0, 0);
      this.yLevelChange();
    } else {
      if (this.position.x > 985) {
        this.velocity.set(-1, 0, 0);
        this.yLevelChange();
      }
    }
  }

  yLevelChange() {
    let amountToGoDown = 50;
    this.position.y += amountToGoDown;
  }

  collisionDetection(collidedWith) {
    return (
      this.position.dist(collidedWith.position) <
      collidedWith.hitboxSize.x + this.hitboxSize.x / 2 && collidedWith.friendly === false
    );
  }

  update() {
    // Makes the ship move
    this.position.add(this.velocity);
    // Makes the ship bounce off the walls
    this.xDirectionChange();
    this.yLevelChange();
  }
}
