import "phaser";

export default class Bug extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    // Add to scene
    this.scene = scene;
    this.scene.add.existing(this);

    // Animation
    this.anims.create({
      key: "fly",
      frames: this.anims.generateFrameNumbers("butterfly", {
        start: 0,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
    });
}
}
