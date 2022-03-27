class BossCreator extends Creator {
  constructor() {
    super();
  }
  create() {
    return new Boss(
      createVector(200, 200),
      createVector(1, 0),
      createVector(100, 100),
      loadImage(
        "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ships/shipBoss.png"
      )
    );
  }
}
