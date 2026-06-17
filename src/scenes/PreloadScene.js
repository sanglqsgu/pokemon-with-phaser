import { Battle_assets_keys, BattleBackgrounds_assets_keys } from "../../assets/asset-keys.js";
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
        
        this.load.image(BattleBackgrounds_assets_keys.FOREST, 'assets/images/monster-tamer/battle-backgrounds/forest-background.png');
        this.load.image(Battle_assets_keys.health, 'assets/images/monster-tamer/monsters/IGUANIGNITE.png');
    }

    create() {
        console.log("create");
        console.log(this.textures.get('background'));
    }

    // update() {
    //     console.log("update");
    // }

}