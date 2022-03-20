class Bullet {
  constructor(position, velocity, sprite) {
    this.position = position;
    this.velocity = velocity;
    this.dead = false;
    this.sprite = sprite;
    this.hitboxSize = createVector(10, 10);
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    image(this.sprite, 0, 0, this.hitboxSize.x, this.hitboxSize.y);
    pop();
  }

  update() {
      this.position.add(this.velocity);
  }
}
