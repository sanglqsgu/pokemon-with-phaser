import {  BATTLE_BACKGROUND_ASSETS_KEYS, MONSTERS_ASSETS_KEYS } from "../../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEY } from "./scene-key.js";

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEY.BATTLE_SCENE,
        });
        console.log(SCENE_KEY.BATTLE_SCENE);
    }

    create() {
        console.log(`[${SCENE_KEY.BATTLE_SCENE}:create] invoke`);
        
        //Code chạy tuần tự tự trên xuống dưới thứ tự hiện tại
        // 1 - BackGround, 2 - Monter
        // Nếu muốn Monter lên trước thì thêm funciton setDepth()

        // render out the battle background
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSETS_KEYS.FOREST).setOrigin(0);

        //render out the player and enemy monsters
        this.add.image(256, 316, MONSTERS_ASSETS_KEYS.IGUANIGNITE, 0).setFlipX(true)
        this.add.image(768, 144, MONSTERS_ASSETS_KEYS.CARNODUSK, 0)
        
        
    }

    // update() {
    //     console.log("update");
    // }

}