/** @type {import("../typings/phaser")} */

import "phaser";
import config from "./config/config";

class Game extends Phaser.Game {
  constructor() {
    super(config);
  }
}

window.onload = function () {
  window.game = new Game();
};
