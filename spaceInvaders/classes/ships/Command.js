// In here the snapshot machine gets all the information from the boss
class Command extends SnapShot {
  constructor(position, velocity, hitboxSize, sprite, hp, boss) {
    super(position, velocity, hitboxSize, sprite, hp);
    this.boss = boss;
    this.snapshot = null;
  }
  execute() {
    this.snapshot = this.boss.save();
  }
  unexecute() {
    this.boss.restore(this.snapshot);
  }
}
