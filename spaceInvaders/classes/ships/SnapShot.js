class SnapShot extends Boss
{
    constructor(position, velocity, hitboxSize, sprite, hp)
    {
        super(position, velocity, hitboxSize, sprite, hp);
        this.hp = hp;
        this.position = position;
        this.velocity = velocity;
        this.hitboxSize = hitboxSize;
        this.sprite = sprite;
    }

    getHp()
    {
        return this.hp;
    }

    getPosition()
    {
        return this.position;
    }

    getVelocity()
    {
        return this.velocity;
    }

    getHitboxSize(){
        return this.hitboxSize;
    }

    getSprite(){
        return this.sprite;
    }
}