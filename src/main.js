import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix
import createFightScene from "./scene/fight";
import {GAME_WIDTH , GAME_HEIGHT} from './constant'
const kaplayOptions = {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    letterbox: true,
    // pixelDensity: Math.min(window.devicePixelRatio, 2), // crispier on phones
    background: "#000000",
}

export const k = kaplay(kaplayOptions);

k.loadSprite('background', 'src/assets/background.jpg')
k.loadSprite("player", "src/assets/sprites/player.png", {
    sliceX: 16,
    sliceY: 4,
    anims: {
        "IDLE": {
            from: 0,
            to: 9,
            speed: 5,
            loop: true,
        },
        "RUN": {
            from: 16,
            to: 30,
            speed: 10,
            loop: true,
        },
        "ATTACK": {
            from: 33,
            to: 37,
            speed: 10,
            loop: false,
          },
        "HURT": {
          from: 49,
          to: 54,
          speed: 10,
          loop: false,
        },
    },
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
createFightScene()

async function main() {
  k.go("fight");
}

main();

// k.loadSprite("bean", "sprites/bean.png");

// k.add([k.pos(120, 80), k.sprite("bean")]);

// k.onClick(() => k.addKaboom(k.mousePos()));