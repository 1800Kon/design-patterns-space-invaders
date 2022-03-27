class SpeedyBossDecorator extends Boss {
  constructor(bossToWrap) {
    super();
    this.bossToWrap = bossToWrap;
    this.bossToWrap.velocity = new Vector(2, 0);
  }

  specialMovement() {
    if (this.position.x < 15) {
      this.velocity.set(2, 0, 0);
      this.yLevelChange();
    } else {
      if (this.position.x > 985) {
        this.velocity.set(-2, 0, 0);
        this.yLevelChange();
      }
    }
  }
}
