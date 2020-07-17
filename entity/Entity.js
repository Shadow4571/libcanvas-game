'use strict';

class Entity {
    constructor(x, y, width, height, angle, color) {
        this.x = x; this.y = y;
        this.width = width; this.height = height;
        this.rect = new Rectangle(x, y, width, height);
        this.angle = angle;
        this.color = color;
        this.isAlive = true;
    }

    destroy() { this.isAlive = false; }

    rotate(radian) { this.angle = radian; }

    input(mHandler, kHandler) {

    }

    update(deltaTime) {
        this.rect.from.x = this.x; this.rect.to.x = this.x + this.width;
        this.rect.from.y = this.y; this.rect.to.y = this.y + this.height;
    }

    draw(canvas, context) {
        context.save();
        context.rotate(this.angle, {x: this.rect.center.x, y: this.rect.center.y});
        context.fill(this.rect, this.color);
        context.restore();
    }
}