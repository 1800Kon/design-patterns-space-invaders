# design-patterns-space-invaders

Konstantin Boguev

Tung Do Xuan

Sander Siimann

## Problem description
The javascript web application uses 4 different kind of patterns:

* Factory patter: 
  * This pattern will create enemies, player, boss and bullets.
* Memento pattern: 
  * After killing the enemies, the boss will be created. 
  * When boss exist, boss has 50 percentage chance to save current properties.
  * When boss <= 80hp, it will restore the memento once.
* State pattern:
  * When boss <= 60hp, it will change to Angry state which has a double of speed.
  * if boss <= 40hp, it will change to Crazy state to triple the speed.
* Decorator pattern: 
  * If boss is in 20 and 30. The boss will become a speedyBossDecorator, then the boss will be 4 times the speed.
  * if boss < 20. The boss will become a MachineGunBossDecorator, then the bullet rate will increase.

##### Controllers:

* Space bar to shoot
* Left and Right arrow keys to move player's ship.

##### Library:

The game uses a p5.js library.

## UML

![](https://i.imgur.com/XbdlFRV.png)
