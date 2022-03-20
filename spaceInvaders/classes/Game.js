class Game {
  // Load all the game assets in here
  constructor() {}

  // Add more things which need to be initialized
  init() {
    this.enemies = [];
    this.bullets = [];
    this.creator = new Creator();
    this.player = this.creator.createShip("player");
    this.generateEnemyGroup();
  }

  generateEnemyGroup() {
    let enemy;
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 9; i++) {
        enemy = this.creator.createShip("enemy");
        enemy.position.x += i * 50;
        enemy.position.y +=  j * 60;
        this.enemies.push(enemy);
      }
    }
  }

  display() {
    this.player.movement();
    this.player.display();
    this.bulletLogic();
    this.enemyLogic();
  }

  enemyLogic() {
    this.enemies.forEach((enemy) => {
      enemy.display();
      enemy.movementUpdate();
    });
  }

  shootBullet() {
    let bullet = this.player.shoot();
    if (bullet != null) {
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
        bullet.dead = true;
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
