class State extends Boss {
  constructor(position, velocity, hitboxSize, sprite, hp) {
    super(position, velocity, hitboxSize, sprite, hp);
  }
  // abstract methods
  movementUpdate() {}
}
