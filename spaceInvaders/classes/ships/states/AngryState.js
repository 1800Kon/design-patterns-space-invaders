class AngryState extends State {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite, hp);
  }

  movementUpdate() {
    this.position.add(this.velocity);
    if (this.position.x < 15) {
      this.velocity.set(3, 0, 0);
      this.yLevelChange();
    } else {
      if (this.position.x > 985) {
        this.velocity.set(-3, 0, 0);
        this.yLevelChange();
      }
    }
  }
}