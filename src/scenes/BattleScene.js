import { BATTLE_ASSETS_KEYS, BATTLE_BACKGROUND_ASSETS_KEYS, HEALTH_ASSETS_KEYS, MONSTERS_ASSETS_KEYS } from "../../assets/asset-keys.js";
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

        //render health bar
        const playerMonsterName = this.add.text(30, 20, MONSTERS_ASSETS_KEYS.IGUANIGNITE, {
            color: "#eb1118",
            fontSize: "32px",
            fontStyle: "Bold",
        });

        this.add.container(556, 318, [
            this.add.image(0, 0, BATTLE_ASSETS_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0),
            playerMonsterName,
            this.#createHealth(34, 34),
        ])
        
    }
    // tạo thanh máu trong container
    #createHealth(x, y) {
        const leftCap = this.add.image(x, y, HEALTH_ASSETS_KEYS.LEFT_CAP).setOrigin(0, 0.5)
        console.log(leftCap.x , leftCap.y, leftCap.width);

        const middle = this.add.image(
            leftCap.x + leftCap.width, 
            y,
            HEALTH_ASSETS_KEYS.MIDDLE
        ).setOrigin(0, 0.5)
        console.log(middle.x , middle.y, middle.width);

        middle.displayWidth = 360;

        const rightCap = this.add.image(
            middle.x + middle.displayWidth + 10, 
            y, 
            HEALTH_ASSETS_KEYS.RIGHT_CAP)
            .setOrigin(0, 0.5)
            console.log(rightCap.x , rightCap.y, rightCap.width);
        return this.add.container(x, y, [leftCap, middle, rightCap])
    }


}