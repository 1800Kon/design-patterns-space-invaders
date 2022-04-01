# design-patterns-space-invaders

Konstantin Boguev

Tung Do Xuan

Sander Siimann

## Problem description

The javascript web application game 'Space Invader' uses 4 different kind of patterns:

* Factory patter: 
  * This pattern will create enemies, player, boss and bullets.
* Memento pattern: 
  * After killing the enemies, the boss will be created. 
  * When boss exist, boss has 50 percentage chance to save current properties.
  * When boss has less or equal to 80hp, it will restore the memento once.
* State pattern:
  * When boss hp is <= 60hp, it will change to Angry state which has double the movement speed.
  * if boss hp is <= 40hp, it will change to Crazy state in whhich the movement speed is tripled.
* Decorator pattern: 
  * If the boss has between 20-30 hp. The boss will become a speedyBossDecorator, then the boss will be 4 times the movement speed.
  * if boss hp < 20. The boss will become a MachineGunBossDecorator, then the shooting rate will increase.

##### Controls:

* Space bar to shoot
* Left and Right arrow keys to move the player's ship.

##### Library:

The game uses the p5.js library.

## UML

![](https://i.imgur.com/XbdlFRV.png)
