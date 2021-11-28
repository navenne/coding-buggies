import "phaser";

export default class Bug extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    // Add to scene
    this.scene = scene;
    this.scene.add.existing(this);

    // Random generated bug type
    this.bugType = Phaser.Math.RND.weightedPick(["butterfly", "wasp", "moth"]);

    // Animations
    this.anims.create({
      key: "butterfly",
      frames: this.anims.generateFrameNumbers("butterfly"),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "wasp",
      frames: this.anims.generateFrameNumbers("wasp"),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "moth",
      frames: this.anims.generateFrameNumbers("moth"),
      frameRate: 12,
      repeat: -1,
    });

    // Play animation
    this.anims.play(this.bugType);
}
}
