class BasicEnemy extends ShipDecorator {
    constructor(position, velocity, hitboxSize, sprite) {
        super(position, velocity, hitboxSize, sprite);
    }

    shoot() {
        
    }

    movementUpdate() {
        this.position.add(this.velocity);
    }

}