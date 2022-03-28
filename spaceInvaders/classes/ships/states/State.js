class State {
  constructor(boss) 
  {
    this.boss = boss;
  }

  // abstract methods
  movementUpdate() {}
  copyFromMemento() {}
}