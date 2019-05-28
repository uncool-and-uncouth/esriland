import Phaser from "phaser";
import GameScene from './gamescene'

const config = {
  type: Phaser.AUTO,
  parent: "esriland",
  width: 640,
  height: 576,
  scene: [GameScene]
};

const game = new Phaser.Game(config);
