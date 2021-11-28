/** @type {import("../typings/phaser")} */

import "phaser";
import config from "./config/config";

import MainScene from "./scenes/MainScene";
import GameOverScene from "./scenes/GameOverScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    
    this.scene.add("MainScene", MainScene);
    this.scene.add("GameOverScene", GameOverScene);

    this.scene.start("MainScene");
}
}

window.onload = function () {
  window.game = new Game();
};
