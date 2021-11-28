/** @type {import("../typings/phaser")} */

import "phaser";
import config from "./config/config";

import IntroScene from "./scenes/IntroScene";
import MainScene from "./scenes/MainScene";
import GameOverScene from "./scenes/GameOverScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add("IntroScene", IntroScene);
    this.scene.add("MainScene", MainScene);
    this.scene.add("GameOverScene", GameOverScene);

    this.scene.start("IntroScene");
  }
}

window.onload = function () {
  window.game = new Game();
};
