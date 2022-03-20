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
  }

  enemyLogic() {
    this.enemies.forEach(enemy => {
      enemy.movementUpdate();
    });
  }

  playerLogic() {

  }

  bulletLogic() {
    
  }

  frameUpdate() {
    this.display();
  }
}