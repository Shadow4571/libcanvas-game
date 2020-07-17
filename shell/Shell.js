'use strict';

class Shell extends Entity{
    constructor(x, y, width, height, color, owner, target, aliveTime, shellSpeed) {
        super(x, y, width, height, MathUtil.getAngleTowardTarget(owner.rect.center.x, owner.rect.center.y, target.x, target.y), color);
        this.owner = owner;
        this.target = target;
        this.shellSpeed = shellSpeed;
        this.vector = MathUtil.normalizeVector({x: target.x - owner.rect.center.x, y: target.y - owner.rect.center.y});
        setTimeout(this.destroy.bind(this), aliveTime);
    }

    update(deltaTime) {
        this.x += this.vector.x * this.shellSpeed;
        this.y += this.vector.y * this.shellSpeed;
        super.update(deltaTime);
    }

    draw(canvas, context) {
        super.draw(canvas, context);
    }
}