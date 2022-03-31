class SpeedyBossDecorator extends Boss {
  constructor(position, velocity, hitboxSize, sprite, hp, bossToWrap) {
    super(position, velocity, hitboxSize, sprite, hp);
    this.bossToWrap = bossToWrap;
  }

  specialMovement() {
    if (this.bossToWrap.position.x < 15) {
      this.bossToWrap.velocity.set(5, 0, 0);
      this.bossToWrap.yLevelChange();
    } else {
      if (this.bossToWrap.position.x > 985) {
        this.bossToWrap.velocity.set(-5, 0, 0);
        this.bossToWrap.yLevelChange();
      }
    }
  }
}