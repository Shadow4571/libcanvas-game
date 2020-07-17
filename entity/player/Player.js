'use strict';

class Player extends Entity {
    constructor(x, y, width, height, angle, color, maxSpeed, maxHealth, shellAliveTime, attackDelay) {
        super(x, y, width, height, angle, color);
        this.maxSpeed = maxSpeed;
        this.maxHealth = maxHealth;
        this.Health = this.maxHealth;
        this.accX = 0; this.accY = 0;
        this.isAttack = false;
        this.shellAliveTime = shellAliveTime;
        this.attackDelay = attackDelay;

        this.shells = [];
    }

    canAttack() { this.isAttack = false; }

    input(mHandler, kHandler) {
        if(kHandler.keyHandler.keyUP) {
            this.accY = -this.maxSpeed;
        } else if(kHandler.keyHandler.keyDOWN) {
            this.accY = this.maxSpeed;
        } else {
            this.accY = 0;
        }

        if(kHandler.keyHandler.keyLEFT) {
            this.accX = -this.maxSpeed;
        } else if(kHandler.keyHandler.keyRIGHT) {
            this.accX = this.maxSpeed;
        } else {
            this.accX = 0;
        }

        this.rotate(MathUtil.getAngleTowardTarget(this.rect.center.x, this.rect.center.y, mHandler.mouseHandler.x, mHandler.mouseHandler.y));

        if(mHandler.mouseHandler.lmbClick && !this.isAttack) {
            this.shells.push(new Shell(this.rect.center.x, this.rect.center.y,10, 45, "orange", this, {x: mHandler.mouseHandler.x, y: mHandler.mouseHandler.y}, this.shellAliveTime, 5));
            this.isAttack = true;
            setTimeout(this.canAttack.bind(this), this.attackDelay);
        }
    }

    update(deltaTime) {
        this.x += this.accX;
        this.y += this.accY;
        super.update(deltaTime);

        if(this.shells.length > 0)
            this.shells = this.shells.filter(shell => shell.isAlive);

        for(let i = 0; i < this.shells.length; i++)
            this.shells[i].update(deltaTime);
    }

    draw(canvas, context) {
        super.draw(canvas, context);

        for(let i = 0; i < this.shells.length; i++)
            this.shells[i].draw(canvas, context);
    }
}