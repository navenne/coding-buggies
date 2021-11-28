import "phaser";
import Bug from "../entity/Bug";
import Player from "../entity/Player";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("floor", "assets/floor.png");
    this.load.spritesheet("player", "assets/player.png", {
      frameWidth: 37,
      frameHeight: 64,
    });
    this.load.spritesheet("butterfly", "assets/butterfly.png", {
      frameWidth: 16,
      frameHeight: 11,
    });
  }

  create() {
    // Add components
    this.add.image(200, 300, "background");
    this.floor = this.physics.add.staticImage(200, 595, "floor");
    this.player = new Player(this, 200, 554, "player");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score = 0;
    this.scoreLabel = this.add.bitmapText(10, 10, "pixelFont", "SCORE ", 16);
    this.scoreLabel.setLetterSpacing(1);
    this.gameOver = false;

    this.createGroups();

    this.createEvents();

    this.createCollisions();
  }

  update() {
    this.player.update(this.cursors);
  }

  createGroups() {
    this.bugs = this.physics.add.group({
      classType: Bug,
    });
  }

  createEvents() {
    // Continuously drop items
    this.time.addEvent({
      delay: 200,
      callback: this.dropItem,
      callbackScope: this,
      loop: true,
    });

    // Increasing score by 1 every second
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.score += 1;
        this.scoreLabel.setLetterSpacing(2);
        this.scoreLabel.text = "SCORE " + this.score;
      },
      callbackScope: this,
      loop: true,
    });
  }

  createCollisions() {
    this.physics.add.collider(this.player, this.floor);
    this.physics.add.overlap(this.player, this.bugs, this.hitByBug, null, this);
  }

  createBug(x, y) {
    this.bugs.setVelocityY(200);
    this.bugs.playAnimation("fly");
    this.bugs.create(x, y, "butterfly");
  }

  hitByBug(player, bug) {
    this.player.stress += 1;
    bug.disableBody(true, true);
    player.setTint(0xff0000);
    setTimeout(() => {
      if (this.player.stress == 3) {
        this.gameOver = true;
        this.scene.start("GameOverScene", this.score);
      } else {
        player.clearTint();
      }
    }, 200);
  }

  dropItem() {
    let x = Phaser.Math.Between(10, 380);
    this.createBug(x, 0);
  }
}
