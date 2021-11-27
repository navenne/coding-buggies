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

    this.createGroups();

    this.createCollisions();
  }

  update() {
    this.player.update(this.cursors);
  }

  createGroups() {
    this.bugs = this.physics.add.group({
      classType: Bug,
    });
    // this.bugs.create(200, 20, "butterfly");
  }

  createCollisions() {
    this.physics.add.collider(this.player, this.floor);
    this.physics.add.overlap(this.player, this.bugs, this.hitByBug, null, this);
  }

  hitByBug(player, bug) {
    bug.disableBody(true, true);
    player.setTint(0xff0000);
    setTimeout(() => {
      player.clearTint();
    }, 200);
  }
}
