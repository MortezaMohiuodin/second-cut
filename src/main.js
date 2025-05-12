import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix
import createFightScene from "./scene/fight";
import {GAME_WIDTH , GAME_HEIGHT} from './constant'
const kaplayOptions = {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    letterbox: true,
    // pixelDensity: Math.min(window.devicePixelRatio, 2), // crispier on phones
    background: "8db7ff",
}

export const k = kaplay(kaplayOptions);

k.loadSprite('background', '../public/background.jpg')
k.loadSprite('player', '../public/player/IDLE.png')

k.loadRoot("./"); // A good idea for Itch.io publishing later
createFightScene()

async function main() {
  k.go("fight");
}

main();

// k.loadSprite("bean", "sprites/bean.png");

// k.add([k.pos(120, 80), k.sprite("bean")]);

// k.onClick(() => k.addKaboom(k.mousePos()));