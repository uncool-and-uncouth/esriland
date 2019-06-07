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
        this.comp.setInteractive()
        this.createWalkCycle()
        this.createIdle()
        this.createJump()
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.right.isDown)
        {
            this.comp.flipX = false
            this.walk()
            this.comp.x += 5
        }
        else if (this.cursors.left.isDown) {

            this.comp.flipX = true
            this.walk()
            this.comp.x -= 5
        }
        else if (this.cursors.space.isDown) {
            // jamp
        }
        else {
            this.comp.play('turn')
        }
    }

    createWalkCycle() {
        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'comp', frame: 1 },
                { key: 'comp', frame: 2 },
                { key: 'comp', frame: 3 }
            ],
            frameRate: 8,
            repeat: -1
        });
    }

    createIdle() {
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'comp', frame: 0 } ],
            frameRate: 20
        });
    }

    createJump() {
        this.anims.create({
            key: 'jump',
            frames: [ {key: 'comp', frame: 1}],
            frameRate: 20
        })
    }

    walk() {
        this.comp.play('walk', true);
    }
}