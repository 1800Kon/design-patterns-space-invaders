class MachineGunBossDecorator extends Boss {
    constructor(position, velocity, hitboxSize, sprite, hp, bossToWrap,bullets) {
      super(position, velocity, hitboxSize, sprite, hp);
      this.bossToWrap = bossToWrap;
      this.bullets = bullets;
    }
  
    fastFire() 
    {
      let random = Math.random();
      let shootingRate = 0.15;

      if (random < shootingRate) {
        this.bullets.push(this.bossToWrap.shoot());
      }
    }
  }