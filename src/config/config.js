export default {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    render: {
      pixelArt: true,
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    }
  };