import {Scene} from 'phaser'
import compSheet from './assets/comp_sheet-lg.png'


export default class GameScene extends Scene {
    constructor(config) {
    super(config);
    }

    preload() {
        this.load.spritesheet('comp', compSheet, { frameWidth: 128, frameHeight: 128 })
     }
    create() {
        this.comp = this.add.sprite(300, this.game.config.height/2, 'comp')
    }
}