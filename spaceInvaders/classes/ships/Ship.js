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
  checkShipPosition() {
    if (this.position.x < 100) {
      return true;
    } else {
      if (this.position.x > 1000) {
        return true;
      } else {
        return false;
      }
    }
  }

  xDirectionChange() {
    if (this.checkShipPosition) {
      this.velocity.x *= -1;
    }
  }

  yLevelChange() {
    if (this.checkShipPosition) {
      // Look for the correct value in this <><><><><><><><><><><><><><><>
      let amountToGoDown = 20;
      this.position.y = this.position.y - amountToGoDown;
    }
  }

  collisionDetection(collidedWith) {
    return this.position.dist(collidedWith) < collidedWith.hitboxSize.x / 2;
  }

  update() {
    // Makes the ship move
    this.position.add(this.velocity);
    // Makes the ship bounce off the walls
    this.xDirectionChange();
    this.yLevelChange();
  }
}
