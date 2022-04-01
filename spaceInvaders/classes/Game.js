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

    this.decoratedSpeedBoss = false;
    this.decoratedMachineGunBoss = false;

    this.resetGame = true;
  }

  generateEnemyGroup() {
    let enemy;
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 9; i++) {
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
      if (enemy.position.y > 600) {
        this.player.hp = 0;
      }
      if (enemy.boss) {
        // this is the snapshot for the revival
        // 50% chance that boss will be taken snapshot when exist
        let random = Math.random();
        let trigger = 0.5;
        if (random < trigger && this.snapshotCreated == false) {
          enemy.createSnapshot();
          this.snapshotCreated = true;
        }
        //restore the snapshot once base on HP
        if (
          enemy.hp <= 80 &&
          this.snapshotCreated == true &&
          this.snapshotRestored == false
        ) {
          enemy.restoreSnapshot();
          this.snapshotRestored = true;
        }

        // Changing state base on HP
        if (enemy.hp <= 60 && this.stateChangedtoAngryState == false) {
          enemy.changeStateToAngry();
          this.stateChangedtoAngryState = true;
        }

        if (enemy.hp <= 40 && this.stateChangedtoCrazyState == false) {
          enemy.changeStateToCrazy();
          this.stateChangedtoCrazyState = true;
        }

        if (20 <= enemy.hp <= 30 && this.decoratedSpeedBoss == false) {
          this.boss = new SpeedyBossDecorator(
            this.boss.position,
            this.boss.velocity,
            this.boss.hitboxSize,
            this.boss.sprite,
            this.boss.hp,
            this.boss
          );
          this.boss.specialMovement();
          this.decoratedSpeedBoss = true;
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
            if (this.resetGame && enemy.hp <= 0) {
              this.enemies.splice(this.enemies.indexOf(enemy), 1);
              alert("YOU WON! Click OK to restart the game.");
              window.location.reload();
              this.resetGame = false;
            }
          } else {
            //clean bullets off screen
            this.enemies.splice(this.enemies.indexOf(enemy), 1);
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
          }
        }

        //if bullet hit player

        if (this.player.collisionDetection(bullet)) {
          this.player.hp -= 1;
          this.bullets.splice(this.bullets.indexOf(bullet), 1);
        }
        if (this.resetGame && this.player.hp <= 0) {
          alert("You died! Click OK to restart the game.");
          window.location.reload();
          this.resetGame = false;
        }
      });

      let random = Math.random();
      let shootingRate = 0.001;

      if (this.enemies.length < 10) {
        shootingRate = 0.01;
      }

      if (enemy.boss) {
        if (enemy.hp <= 20 && this.decoratedMachineGunBoss == false) {
          this.boss = new MachineGunBossDecorator(
            this.boss.position,
            this.boss.velocity,
            this.boss.hitboxSize,
            this.boss.sprite,
            this.boss.hp,
            this.boss,
            this.bullets
          );
          this.boss.fastFire();
          if (enemy.hp <= 4) {
            this.decoratedMachineGunBoss = true;
          }
        }
      }
      // shooting logic for the enemies
      if (random < shootingRate) {
        this.bullets.push(enemy.shoot());
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
