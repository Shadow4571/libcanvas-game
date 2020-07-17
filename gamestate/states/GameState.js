'use strict';

class GameState extends iGameState {
    constructor(stateType) {
        super(stateType);
        this._player = new Player(100, 100, 100, 100, 0, "red", 3, 100, 2000, 200);
    }

    input(mHandler, kHandler) {
        this._player.input(mHandler, kHandler);
    }

    update(deltaTime) {
        this._player.update(deltaTime);
    }

    draw(canvas, context) {
        context.fillAll("#efebe7");
        this._player.draw(canvas, context);
    }
}