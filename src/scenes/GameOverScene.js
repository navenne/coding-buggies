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
    this.load.image("button", "assets/button.png");
  }

  create() {
    // Display game over
    this.add.image(200, 300, "background2");
    this.add
      .bitmapText(60, 210, "pixelFont", "GAME OVER", 50, 1)
      .setDropShadow(5, 5, "#000", 1);
    this.add
      .bitmapText(150, 260, "pixelFont", `SCORE\n${this.score}`, 30, 1)
      .setDropShadow(5, 5, "#000", 1);

    // Restart game button
    this.restartButton = this.add.image(195, 350, "button").setInteractive();
    this.restartButton.on("pointerdown", () => {
        this.scene.start("MainScene");
    })
    this.restartButton.on("pointerover", () => {
        this.restartButton.setScale(0.80);
    })

    this.restartButton.on("pointerout", () => {
        this.restartButton.setScale(1);
    })
  }
}
