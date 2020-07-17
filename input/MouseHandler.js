'use strict';

class MouseHandler {
    constructor() {
        this.mouseHandler = {x: 0, y: 0, lmbClick: false, rmbClick: false};
    }

    moveListener(e) {
        this.mouseHandler.x = e.pageX; this.mouseHandler.y = e.pageY;
    }

    mousedownListener(e) {
        this.mouseHandler.lmbClick = e.button === 0 ? true : this.mouseHandler.lmbClick;
    }

    mouseupListener(e) {
        this.mouseHandler.lmbClick = e.button === 0 ? false : this.mouseHandler.lmbClick;
    }
}