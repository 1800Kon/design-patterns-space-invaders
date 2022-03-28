class Boss extends Ship {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite);
    this.hp = hp;
    this.boss = true;
    this.snapshotCreated = false;
    // this.states = [new DefaultState(),new RevivedState(this) /*new AngryState(this)*/];
    // this.currentState = this.states[0];
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
    this.position.add(this.velocity);
    this.specialMovement();
  }

  // changeState() {
  //   let currentIndex = this.states.findIndex(
  //     (state) => state === this.currentState
  //   );
  //   this.currentState = this.states[currentIndex + 1];
  //   // if (this.hp <= 0) {
  //   //   this.currentState = this.states[currentIndex + 1];
  //   // } else {
  //   //   // This would be default state until it dies
  //   //   this.currentState = this.states[0];
  //   // }
  // }

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

  save() {
    return new SnapShot(
      this.position,
      this.velocity,
      this.hitboxSize,
      this.sprite,
      this.hp
    );
  }

  restore(snapshot) {
    this.hp = snapshot.getHp();
    this.position = snapshot.getPosition();
    this.velocity = snapshot.getVelocity();
    this.hitboxSize = snapshot.getHitboxSize();
    this.sprite = snapshot.getSprite();
  }
}
