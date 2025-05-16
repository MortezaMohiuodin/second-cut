// import "kaplay/global"; // uncomment if you want to use without the k. prefix

import kaplay from "kaplay";
import {GAME_WIDTH , GAME_HEIGHT,BACKGROUND_COLOR,CONTROLS} from './constant'
import {createFightScene,createIntroScene} from "./scene";
import loadSprites from "./sprite";
import createPlayerObj from './obj/player';

const kaplayOptions = {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    background: BACKGROUND_COLOR,
    letterbox: true,
    pixelDensity: Math.min(window.devicePixelRatio, 2), // crispier on phones
}

export const k = kaplay(kaplayOptions);

loadSprites(k)
const player1 = k.make(createPlayerObj('1', 100, {
    [CONTROLS.LEFT]: "a",
    [CONTROLS.RIGHT]: "d",
    [CONTROLS.UP] : 'w',
    [CONTROLS.DOWN] : 's',
    [CONTROLS.ATTACK]: "z",
    [CONTROLS.DUCK]: "x",
    [CONTROLS.PUSH]: "c",
}));

const player2 = k.make(createPlayerObj('2', k.width() - 100, {
  [CONTROLS.LEFT]: "left",
  [CONTROLS.RIGHT]: "right",
  [CONTROLS.UP] : 'up',
  [CONTROLS.DOWN] : 'down',
  [CONTROLS.ATTACK]: "control",
  [CONTROLS.DUCK]: "m",
  [CONTROLS.PUSH]: "n",
}));

k.loadRoot("./"); // A good idea for Itch.io publishing later
    
player2.flipX = true
// player1.play("IDLE");
// player2.play("IDLE");

async function main() {
  createIntroScene()
  createFightScene(player1,player2)

  k.go("fight");
}

main();