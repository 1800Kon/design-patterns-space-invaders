class SnapShot extends Boss {
  //This class store the past state of the Boss
  constructor(bossObject, position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite, hp);
    this.bossObject = bossObject; // pass the boss object to the snapshot
    this.position = position;
    this.velocity = velocity;
    this.hitboxSize = hitboxSize;
    this.sprite = sprite;
    this.hp = hp;
    this.backup = null;
  }

  getHp() {
    return this.hp;
  }

  getPosition() {
    return this.position;
  }

  getVelocity() {
    return this.velocity;
  }

  getHitboxSize() {
    return this.hitboxSize;
  }

  getSprite() {
    return this.sprite;
  }
  // bossObject is the boss object that is being restored
  restore() {
    this.bossObject.setPosition(this.position);
    this.bossObject.setVelocity(this.velocity);
    this.bossObject.setHitboxSize(this.hitboxSize);
    this.bossObject.setSprite(this.sprite);
    this.bossObject.setHp(this.hp);
  }
}
