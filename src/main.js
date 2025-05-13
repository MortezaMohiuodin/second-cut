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
// k.loadSprite('player', '../public/player/IDLE.png')
k.loadSprite("player", "src/assets/sprites/player.png", {
    // The image contains 9 frames layed out horizontally, slice it into individual frames
    sliceX: 16,
    sliceY: 4,
    // Define animations
    anims: {
        "IDLE": {
            // Starts from frame 0, ends at frame 3
            from: 0,
            to: 9,
            // Frame per second
            speed: 5,
            loop: true,
        },
        "RUN": {
            from: 16,
            to: 32,
            speed: 10,
            loop: true,
        },
        "ATTACK": {
            from: 33,
            to: 40,
            speed: 10,
            loop: true,
          },
          "HEART": {
            from: 49,
            to: 54,
            speed: 10,
            loop: true,
          },
        // // This animation only has 1 frame
        // "JUMP": 8,
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