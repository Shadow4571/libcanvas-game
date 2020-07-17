'use strict';

class MathUtil {
    static toRadian(degree) { return degree * Math.PI / 180; }

    static toDegree(radian) { return radian * 180 / Math.PI; }

    static normalizeVector(vector) {
        let length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        return {x: vector.x / length, y: vector.y / length};
    }

    static getAngleTowardTarget(x, y, toX, toY) {
        let length, sineTheta, angle;

        if(y - toY !== 0) {
            length = Math.sqrt(Math.pow(x - toX, 2) + Math.pow(y - toY, 2));
            sineTheta = Math.abs(y - toY) / length;
        } else {
            length = x - toX;
            sineTheta = 0;
        }

        angle = Math.asin(sineTheta);

        if(x - toX > 0 && y - toY > 0)
            angle = Math.PI * 3 / 2 + angle;
        else if(x - toX > 0 && y - toY < 0)
            angle = Math.PI * 3 / 2 - angle;
        else if(x - toX < 0 && y - toY > 0)
            angle = Math.PI / 2 - angle;
        else if(x - toX < 0 && y - toY < 0)
            angle = Math.PI / 2 + angle;
        else if(x - toX > 0 && y - toY == 0)
            angle = Math.PI * 3 / 2;
        else if(x - toX < 0 && y - toY == 0)
            angle = Math.PI / 2;
        else if(x - toX == 0 && y - toY < 0)
            angle = Math.PI;
        else angle = 0;

        return angle;
    }
}