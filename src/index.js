import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import GameScene from './gamescene'

const config = {
  type: Phaser.AUTO,
  parent: "esriland",
  width: 640,
  height: 576,
  scene: [GameScene]
};

const game = new Phaser.Game(config);



//game.scene.add('gamescene', GameScene)

// function preload() {
//   this.load.image("logo", logoImg);
//   this.load.spritesheet('comp', 'assets/comp_sheet-lg.png', { frameWidth: 128, frameHeight: 128 })
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");

//   this.tweens.add({
//     targets: logo,
//     y: 450,
//     duration: 2000,
//     ease: "Power2",
//     yoyo: true,
//     loop: -1
//   });
// }
