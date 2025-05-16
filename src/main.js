// import "kaplay/global"; // uncomment if you want to use without the k. prefix

import kaplay from "kaplay";
import {GAME_WIDTH , GAME_HEIGHT,BACKGROUND_COLOR} from './constant'
import {createFightScene,createIntroScene} from "./scene";
import loadSprites from "./sprite";

const kaplayOptions = {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    background: BACKGROUND_COLOR,
    letterbox: true,
    pixelDensity: Math.min(window.devicePixelRatio, 2), // crispier on phones
}

export const k = kaplay(kaplayOptions);

loadSprites(k)


k.loadRoot("./"); // A good idea for Itch.io publishing later

async function main() {
  createIntroScene()
  createFightScene()
  k.go("fight");
}

main();