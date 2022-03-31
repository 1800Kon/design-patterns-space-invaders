class Boss extends Ship {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite);
    this.hp = hp;
    this.boss = true;
    this.currentState = "default";
    this.bossAngryFlag = false;
    this.snapshot = null;
  }

  shoot() {
    let creator = new BulletCreator();
    return creator.create("enemy", this);
  }

  collisionDetection(collidedWith) {
    return (
      this.position.dist(collidedWith.position) <
        collidedWith.hitboxSize.x + this.hitboxSize.x / 2 &&
      collidedWith.friendly === true
    );
  }

  movementUpdate() {
    if (this.currentState == "default") {
      this.position.add(this.velocity);
      this.specialMovement();
    } else {
      if (this.bossAngryFlag) {
        this.bossAngryFlag = false;
      }
      this.currentState.movementUpdate();
    }
  }
  changeStateToAngry()
  {
    this.currentState = new AngryState(
      this.position,
      this.velocity,
      this.hitboxSize,
      this.sprite,
      this.hp
    );
    this.currentState.movementUpdate();
  }
  changeStateToCrazy() {
    this.currentState = new CrazyState(
      this.position,
      this.velocity,
      this.hitboxSize,
      this.sprite,
      this.hp
    );
    this.currentState.movementUpdate();
  }
  //this creates a copy of the boss object and stores it in the snapshot
  createSnapshot() {
    this.snapshot = new SnapShot(
      this,
      this.position,
      this.velocity,
      this.hitboxSize,
      this.sprite,
      this.hp
    );
  }
  //restores the boss object to the state of the snapshot
  restoreSnapshot() {
    this.snapshot.restore();
  }

  getHp() {
    return this.hp;
  }

  setHp(hp) {
    this.hp = hp;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }

  getVelocity() {
    return this.velocity;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  getHitboxSize() {
    return this.hitboxSize;
  }

  setHitboxSize(hitboxSize) {
    this.hitboxSize = hitboxSize;
  }

  getSprite() {
    return this.sprite;
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }
}
