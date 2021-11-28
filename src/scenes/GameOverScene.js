import "phaser";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
      super("GameOverScene");
    }

    init(score) {
        this.score = score;
    }

    preload() {
        this.load.image("background2", "assets/background-2.png");
    }

    create() {
        this.add.image(200, 300, "background2");
        this.add.bitmapText(60, 210, "pixelFont", "GAME OVER", 50, 1).setDropShadow(5, 5, "#000", 1);
        this.add.bitmapText(135, 280, "pixelFont", `SCORE\n${this.score}`, 40, 1).setDropShadow(5, 5, "#000", 1);
    }
}