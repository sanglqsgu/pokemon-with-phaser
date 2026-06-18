import Phaser from './lib/phaser.js';
import {PreloadScene} from './scenes/PreloadScene.js';
import { SCENE_KEY } from './scenes/scene-key.js';

const game = new Phaser.Game({
    // xóa phần đen dư thừa ở canvas
    type: Phaser.CANVAS,
    pixelArt: true,
    scale: {
        parent: 'game-container',
        width: 1024,
        height: 512,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

    },
    backgroundColor: '#000000',
});

game.scene.add(SCENE_KEY.PRELOAD_SCENE, PreloadScene, true);
// game.scene.start(SCENE_KEY.PRELOAD_SCENE);