class Creator {
  createShip(type) {
    switch (type) {
      case "player":
        return new PlayerShip(
          createVector(500, 700),
          createVector(0, 0),
          createVector(30, 30),
          loadImage(
            "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ships/playerShip.png"
          )
        );
      case "enemy":
        return new BasicEnemy(
          createVector(200, 200),
          createVector(1, 0),
          createVector(30, 30),
          loadImage(
            "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ships/playerShip.png"
          )
        );
      case "boss":
        return new Boss();
    }
  }
  createBullet(originator, originatorObject) {
    switch (originator) {
      case "player":
        // Makes the bullet travel up from the position of the ship
        let bullet = new Bullet(
          createVector(
            originatorObject.position.x,
            originatorObject.position.y
          ),
          createVector(0, -5),
          loadImage(
            "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ship_parts/cannonBall.png"
          )
        );
        bullet.friendly = true;
        return bullet;
      case "enemy":
        //Makes the bullet travel down from the position of the enemy
        let bulletEnemy =  new Bullet(
          createVector(
            originatorObject.position.x,
            originatorObject.position.y
          ),
          createVector(0, 5),
          loadImage(
            "../../../spaceInvaders/assets/sprites/PNG/Default_size/Ship_parts/cannonBall.png"
          )
        );
        bulletEnemy.friendly = false;
        return bulletEnemy;
    }
  }
}
