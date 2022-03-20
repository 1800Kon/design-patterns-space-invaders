class PlayerShip extends ShipDecorator {
    constructor(position, velocity, hitboxSize, sprite) {
        super(position, velocity, hitboxSize, sprite);
    }

    movement(){
        if (keyIsDown(LEFT_ARROW)) {
            this.position.x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.position.x += 5;
        }
    }
}