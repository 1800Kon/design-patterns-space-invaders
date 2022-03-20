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

  // Fill the bullet options with the correct values
  createBullet() {
    return new Bullet();
  }

}
