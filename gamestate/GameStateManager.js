'use strict';

class GameStateManager {
    constructor(startIndex, ...gameStates) {
        this.currentIndex = startIndex;
        this.gameStates = [];

        for(let i = 0; i < gameStates.length; i++)
            if(gameStates[i] instanceof iGameState)
                this.gameStates.push(gameStates[i]);
    }

    input(mHandler, kHandler) {
        this.gameStates[this.currentIndex].input(mHandler, kHandler);
    }

    update(deltaTime) {
        this.gameStates[this.currentIndex].update(deltaTime);
    }

    draw(canvas, context) {
        this.gameStates[this.currentIndex].draw(canvas, context);
    }
}