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
        // Add components
        this.add.image(200, 300, "background");
        this.floor = this.physics.add.staticImage(200, 595, "floor");
        this.player = new Player(this, 200, 400, "player");
        this.cursors = this.input.keyboard.createCursorKeys();

        this.createCollisions();
    }

    update() {
        this.player.update(this.cursors);
    }

    createCollisions() {
        this.physics.add.collider(this.player, this.floor);
    }
}