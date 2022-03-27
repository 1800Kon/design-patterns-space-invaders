class EnemyCreator extends Creator {
  constructor() {
    super();
  }
  create() {
    return new BasicEnemy(
      createVector(200, 200),
      createVector(1, 0),
      createVector(50, 50),
      loadImage(
        "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ships/playerShip.png"
      )
    );
  }
}
