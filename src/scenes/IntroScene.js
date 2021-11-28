import "phaser";

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super("IntroScene");
  }

  preload() {
    this.load.image("background2", "assets/background-2.png");
    this.load.image("startButton", "assets/start-button.png");
    this.load.bitmapFont("pixelFont", "fonts/pixel.png", "fonts/pixel.xml");
  }

  create() {
    this.add.image(200, 300, "background2");
    this.add
      .bitmapText(90, 210, "pixelFont", "CODING\nBUGGIES", 50, 1)
      .setDropShadow(5, 5, "#000", 1);
    this.startButton = this.add.image(195, 350, "startButton").setInteractive();
    this.startButton.on("pointerdown", () => {
      this.scene.start("MainScene");
    });
    this.startButton.on("pointerover", () => {
      this.startButton.setScale(0.8);
    });

    this.startButton.on("pointerout", () => {
      this.startButton.setScale(1);
    });
  }
}
