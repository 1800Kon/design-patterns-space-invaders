// In here the snapshot machine gets all the information from the boss
class Command extends SnapShot {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(bossObject, position, velocity, hitboxSize, sprite, hp);
    this.backup = backup;//
  }
  execute() {
    this.backup = this.bossObject.createSnapShot();
  }
  undo() {
    if (this.backup != null) {
      this.backup.restore();
    }
  }
}
