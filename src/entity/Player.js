import "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    
    this.stress = 0;

    // Add to scene
    this.scene = scene;
    this.scene.add.existing(this);

    // Physics
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);

    // Animations
    this.anims.create({
      key: "right",
      frames: [{ key: "player", frame: 0 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "idle",
      frames: [{ key: "player", frame: 1 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "left",
      frames: [{ key: "player", frame: 2 }],
      frameRate: 20,
    });

  }

  // Movement
  update(cursors) {
    if (cursors.left.isDown) {
      this.setVelocityX(-200);
      this.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.setVelocityX(200);
      this.anims.play("right", true);
    } else {
      this.setVelocityX(0);
      this.anims.play("idle");
    }
  }
}
