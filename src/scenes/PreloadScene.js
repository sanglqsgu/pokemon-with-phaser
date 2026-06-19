import { BATTLE_ASSETS_KEYS, BATTLE_BACKGROUND_ASSETS_KEYS, HEALTH_ASSETS_KEYS, MONSTERS_ASSETS_KEYS } from "../../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEY } from "./scene-key.js";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEY.PRELOAD_SCENE,
        });
        console.log(SCENE_KEY.PRELOAD_SCENE);
    }
    init() {
        console.log("init");
    }

    preload() {
        // console.log("preload");
        console.log(`[${SCENE_KEY.PRELOAD_SCENE}:preload] invoke`);
        const monsterTamerAssetsPath = 'assets/images/monster-tamer/';
        const kenneyAssetsPath = 'assets/images/kenneys-assets/';

        // battle background
        this.load.image(BATTLE_BACKGROUND_ASSETS_KEYS.FOREST, `${monsterTamerAssetsPath}battle-backgrounds/forest-background.png`);
        
        // battle assets
        this.load.image(BATTLE_ASSETS_KEYS.HEALTH_BAR_BACKGROUND, `${kenneyAssetsPath}ui-space-expansion/custom-ui.png`);
        this.load.image(HEALTH_ASSETS_KEYS.LEFT_CAP, `${kenneyAssetsPath}ui-space-expansion/barHorizontal_green_left.png` );
        this.load.image(HEALTH_ASSETS_KEYS.RIGHT_CAP, `${kenneyAssetsPath}ui-space-expansion/barHorizontal_green_right.png`);
        this.load.image(HEALTH_ASSETS_KEYS.MIDDLE, `${kenneyAssetsPath}ui-space-expansion/barHorizontal_green_middle.png`);

        // monsters assets
        this.load.image(MONSTERS_ASSETS_KEYS.IGUANIGNITE, `${monsterTamerAssetsPath}monsters/iguanignite.png`);
        this.load.image(MONSTERS_ASSETS_KEYS.CARNODUSK, `${monsterTamerAssetsPath}monsters/carnodusk.png`);
    }

    create() {
        console.log(`[${SCENE_KEY.PRELOAD_SCENE}:create] invoke`);
        this.scene.start(SCENE_KEY.BATTLE_SCENE);

        // console.log(this.textures.get('background'));
        // this.add.image(0, 0, BATTLE_BACKGROUND_ASSETS_KEYS.FOREST).setOrigin(0);
        // this.add.image(0, 0, BATTLE_ASSETS_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0, 0);
        // this.add.image(512, 0, MONSTERS_ASSETS_KEYS.IGUANIGNITE).setOrigin(0, 0);
        // this.add.image(0, 0, MONSTERS_ASSETS_KEYS.CARNODUSK).setOrigin(0, 0);
        // this.add.image(0, 0, HEALTH_ASSETS_KEYS.LEFT_CAP).setOrigin(0, 0);
        // this.add.image(0, 0, HEALTH_ASSETS_KEYS.RIGHT_CAP).setOrigin(0, 0);
        // this.add.image(0, 0, HEALTH_ASSETS_KEYS.MIDDLE).setOrigin(0, 0);
    }

    // update() {
    //     console.log("update");
    // }

}