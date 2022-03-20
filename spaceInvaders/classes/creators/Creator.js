class Creator {
  createShip(type) {
    switch (type) {
      case "player":
        return new PlayerShip();
      case "enemy":
        return new BasicEnemy();
      case "boss":
        return new Boss();
    }
  }
  createBullet(originator) {
    switch (originator) {
      case "player":
        return;
      case "enemy":
        return;
    }
  }
}
