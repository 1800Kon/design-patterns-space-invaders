class Creator {
  createShip(type) {
    switch (type) {
      case "player":
        return new PlayerShip(createVector(200,600));
      case "enemy":
        return new BasicEnemy();
      case "boss":
        return new Boss();
    }
  }
  createBullet(originator, originatorObject) {
    switch (originator) {
      case "player":
        // Makes the bullet travel up from the position of the ship
        return new Bullet(originatorObject.position, createVector(0, 5));
      case "enemy":
        //Makes the bullet travel down from the position of the enemy
        return new Bullet(originatorObject.position, createVector(0, -5));
    }
  }
}
