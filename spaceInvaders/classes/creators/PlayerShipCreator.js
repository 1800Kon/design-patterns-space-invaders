class PlayerShipCreator extends Creator {
  constructor() {
    super();
  }
  create() {
    return new PlayerShip(
        createVector(500, 700),
        createVector(0, 0),
        createVector(30, 30),
        loadImage(
          "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ships/playerShip.png"
        ),1
      );
  }
}