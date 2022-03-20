function preload() {
    game = new Game();
}

function setup() {
    createCanvas(1000, 800);
    noCursor();
    bg = loadImage("assets/sprites/PNG/Default_size/Tiles/tile_73.png");
    game.init();
}

function draw() {
    background(bg);
    game.display();
}