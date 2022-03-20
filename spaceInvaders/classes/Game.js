class Game {
  // Load all the game assets in here
  constructor() {}

  // Add more things which need to be initialized
  init() {
    this.enemies = [];
    this.bullets = [];
    this.creator = new Creator();
    this.player = this.creator.createShip("player");
    //this.boss = this.creator.createShip("boss");
  }

  display() {
    this.player.movement();
    this.player.display();
    this.bulletLogic();
  }


  enemyLogic() {
    this.enemies.forEach((enemy) => {
      enemy.movementUpdate();
    });
  }

  shootBullet() {
    let bullet = this.player.shoot();
    if(bullet != null) {
      this.bullets.push(bullet);
    }
  }

  bulletLogic() {    
    // Removes any dead bullets from the list
    // REPLACE THIS WITH A STATE FOR THE BULLET, SAME HOW THE BOSS HAS STATES
    this.bullets.forEach((bullet) => {
      if (
        bullet.position.y > 800 ||
        bullet.position.y < 0 ||
        bullet.position.x < 0 ||
        bullet.position.x > 1000
      ) {
        bullet.dead == true;
      }
        if (bullet.dead == true) {
          this.bullets.splice(this.bullets.indexOf(bullet), 1);
        } else {
          bullet.display();
          bullet.update();
        }
    });
  }

  frameUpdate() {
    this.display();
  }
}
