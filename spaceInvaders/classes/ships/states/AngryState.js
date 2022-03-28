class AngryState extends State {
  constructor() {
    super();
    //this.boss.velocity.multiply(2);
    // change the null to another sprite in the library to show its angry
    this.boss.sprite = null;
  }

  movementUpdate() {
    if (this.position.x < 15) {
      this.velocity.multiply(2);
      this.yLevelChange();
    } else {
      if (this.position.x > 985) {
        this.velocity.multiply(-2);
        this.yLevelChange();
      }
    }
  }
}