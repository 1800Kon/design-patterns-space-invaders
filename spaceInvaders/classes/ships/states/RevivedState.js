class RevivedState extends State {
  constructor(boss) {
    super(boss);
    this.restoredSnapshot = new Command(
      this.boss.position,
      this.boss.velocity,
      this.boss.hitboxSize,
      this.boss.sprite,
      this.boss.hp,
      this.boss
    );

    this.restoredSnapshot.unexecute();
  }

  copyFromMemento() {
    // take all the information from the memento and overwrite the information in the current boss
    // this.boss.hp = memento.hp;
    this.boss.hp = this.restoredSnapshot.hp;
    this.boss.position = this.restoredSnapshot.position;
    this.boss.velocity = this.restoredSnapshot.velocity;
    this.boss.hitboxSize = this.restoredSnapshot.hitboxSize;
    this.boss.sprite = this.restoredSnapshot.sprite;
  }

  movementUpdate() {
    this.position.add(this.velocity);
    if (this.position.x < 15) {
      this.velocity.multiply(0.5);
      this.yLevelChange();
    } else {
      if (this.position.x > 985) {
        this.velocity.multiply(-0.5);
        this.yLevelChange();
      }
    }
  }
}
