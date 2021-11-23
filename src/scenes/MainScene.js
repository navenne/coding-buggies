import "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("floor", "assets/floor.png");
    }

    create() {
        this.add.image(200, 300, "background");
        this.add.image(200, 590, "floor");
    }
}