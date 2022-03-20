class Ship {
    constructor(position, velocity, hitboxSize, sprite) {
        this.position = position;
        this.velocity = velocity;
        this.hitboxSize = hitboxSize;
        this.sprite = sprite;
    }
    display() {
        push();
        imageMode(CENTER);
        translate(this.position.x, this.position.y);
        image(this.sprite, 0, 0, this.hitboxSize.x, this.hitboxSize.y);
        pop();
    }

    collisionDetection(collidedWith) {
        return (this.position.dist(collidedWith) < collidedWith.hitboxSize.x / 2);
    }

    directionChange() {
        // Figure out when the direction of the ship is going to change
        this.velocity.x *= -1;
    }

    update() {
        this.position.add(this.velocity);
    }
}