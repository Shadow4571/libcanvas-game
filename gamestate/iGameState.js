'use strict';

const STATE_TYPE_MAIN_MENU = {id: 0, desc: "Main game menu"};
const STATE_TYPE_GAME = {id: 1, desc: "Game"};

class iGameState {
    constructor(stateType) {
        this.stateType = stateType;
    }

    input(mHandler, kHandler) { }
    update(deltaTime) { }
    draw(canvas, context) { }
}