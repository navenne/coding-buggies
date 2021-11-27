import "phaser";
import Player from "../entity/Player";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("floor", "assets/floor.png");
        this.load.spritesheet("player", "assets/player.png", { frameWidth: 37, frameHeight: 64 });
    }

    create() {
        this.add.image(200, 300, "background");
        this.add.image(200, 590, "floor");

        this.player = new Player(this, 200, 400, "player");

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.update(this.cursors);
    }
}