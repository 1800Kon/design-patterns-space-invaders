class Game {
  // Load all the game assets in here
  constructor() {}
  // Add more things which need to be initialized
  init() {
    this.enemies = [];
    this.bullets = [];

    this.playerShipCreator = new PlayerShipCreator();
    this.enemyCreator = new EnemyCreator();
    this.bossCreator = new BossCreator();
    this.bulletCreator = new BulletCreator();

    this.player = this.playerShipCreator.create();
    this.boss = this.bossCreator.create();

    this.generateEnemyGroup();
    this.snapshotCreated = false;
    this.snapshotRestored = false;
    this.bossPushed = false;

    this.stateChangedtoAngryState = false;
    this.stateChangedtoCrazyState = false;
    this.command;
  }

  generateEnemyGroup() {
    let enemy;
    for (let j = 0; j < 1; j++) {
      for (let i = 0; i < 1; i++) {
        enemy = this.enemyCreator.create();
        enemy.position.x += i * 50;
        enemy.position.y += j * 60;
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
    //Check if normal enemy is still alive, if not spawn boss
    if (!this.bossPushed && this.enemies.length == 0) {
      this.enemies.push(this.boss);
      this.bossPushed = true;
    }

    //loop and spawn, give movement to normal enemies
    this.enemies.forEach((enemy) => {
      enemy.display();
      enemy.movementUpdate();

      //if boss spawned, give movement to boss
      if (this.bossPushed) {
        this.boss.display();
        this.boss.movementUpdate();
      }
      // this is the snapshot for the revival
      if (enemy.boss) {
        let random = Math.random();
        let trigger = 1;
        if (random < trigger && this.snapshotCreated == false) {
          enemy.createSnapshot();
          this.snapshotCreated = true;
        }
        //restore the snapshot base on HP
        if (
          enemy.hp <=8 &&
          this.snapshotCreated == true &&
          this.snapshotRestored == false
        ) {
          enemy.restoreSnapshot();
          this.snapshotRestored = true;
        }
        
        // Changing state base on HP
        if (enemy.hp <= 6 && this.stateChangedtoAngryState == false) {
          enemy.changeStateToAngry();
          this.stateChangedtoAngryState = true;
        }

        if (enemy.hp <= 4 && this.stateChangedtoCrazyState == false) {
          enemy.changeStateToCrazy();
          this.stateChangedtoCrazyState = true;
        }


      }
      //bullet collisionDetection
      this.bullets.forEach((bullet) => {
        if (enemy.collisionDetection(bullet)) {
          //if bullet hit boss
          if (enemy.boss == true) {
            enemy.hp -= 2;
            this.bullets.splice(this.bullets.indexOf(bullet), 1);

            //if enemy hp ded, remove enemy
            if (enemy.hp <= 0) {
              this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
          } else {
            this.enemies.splice(this.enemies.indexOf(enemy), 1);
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
          }
        }
      });

      let random = Math.random();
      let shootingRate = 0.001;

      if (this.enemies.length < 10) {
        shootingRate = 0.01;
      }
      // shooting logic for the enemies
      if (random < shootingRate) {
        this.bullets.push(enemy.shoot());

        // if the enemy is the boss it will trigger the snashot machine chance
      }
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

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
