'use strict';

const KEY_W = 87, KEY_S = 83;
const KEY_A = 65, KEY_D = 68;

class KeyHandler {
    constructor() {
        this.keyHandler = { keyUP: false, keyDOWN: false, keyLEFT: false, keyRIGHT: false };
    }

    keydownListener(e) {
        this.keyHandler.keyUP = e.keyCode === KEY_W ? true : this.keyHandler.keyUP;
        this.keyHandler.keyDOWN = e.keyCode === KEY_S ? true : this.keyHandler.keyDOWN;
        this.keyHandler.keyLEFT = e.keyCode === KEY_A ? true : this.keyHandler.keyLEFT;
        this.keyHandler.keyRIGHT = e.keyCode === KEY_D ? true : this.keyHandler.keyRIGHT;
    }

    keyupListener(e) {
        this.keyHandler.keyUP = e.keyCode === KEY_W ? false : this.keyHandler.keyUP;
        this.keyHandler.keyDOWN = e.keyCode === KEY_S ? false : this.keyHandler.keyDOWN;
        this.keyHandler.keyLEFT = e.keyCode === KEY_A ? false : this.keyHandler.keyLEFT;
        this.keyHandler.keyRIGHT = e.keyCode === KEY_D ? false : this.keyHandler.keyRIGHT;
    }
}