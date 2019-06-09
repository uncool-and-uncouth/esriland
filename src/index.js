import Phaser from "phaser";
import GameScene from './gamescene'

const config = {
  type: Phaser.AUTO,
  parent: "esriland",
  width: 640,
  height: 576,
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  }
};

const game = new Phaser.Game(config);
