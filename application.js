'use strict';

LibCanvas.extract();

let canvas, context;
let mHandler = new MouseHandler();
let kHandler = new KeyHandler();

let gameStateManager = new GameStateManager(0, new GameState(STATE_TYPE_GAME));

atom.dom(function () {
   canvas = atom.dom("canvas").first;
   context = canvas.getContext("2d-libcanvas");

   document.addEventListener("mousemove", mHandler.moveListener.bind(mHandler));
   document.addEventListener("mousedown", mHandler.mousedownListener.bind(mHandler));
   document.addEventListener("mouseup", mHandler.mouseupListener.bind(mHandler));

   document.addEventListener("keydown", kHandler.keydownListener.bind(kHandler));
   document.addEventListener("keyup", kHandler.keyupListener.bind(kHandler));

   init();
});

function init() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    setTimeout(load, 150);
}

function load() {
    setInterval(frame, 16);
}

function frame() {
    input();
    update();
    draw();
}

function input() {
    gameStateManager.input(mHandler, kHandler);
}

function update() {
    gameStateManager.update(Date.now().valueOf());
}

function draw() {
    gameStateManager.draw(canvas, context);
}

