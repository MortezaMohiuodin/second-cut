import { k } from '../main';
import createPlaygroundObj from '../obj/playground';
import createPlayerObj from '../obj/player';
import createPlatformObj from '../obj/platform';
import setupPlayerControls from '../util/setupPlayerControls';
import { CONTROLS } from '../constant';

export default function createFightScene() {
  k.scene("fight", () => {
    k.setGravity(640);

    k.add(createPlaygroundObj());
    k.add(createPlatformObj());

    const player1 = k.add(createPlayerObj('1', 100, {
        [CONTROLS.LEFT]: "a",
        [CONTROLS.RIGHT]: "d",
        [CONTROLS.UP] : 'w',
        [CONTROLS.DOWN] : 's',
        [CONTROLS.ATTACK]: "z",
        [CONTROLS.DUCK]: "x",
        [CONTROLS.PUSH]: "c",
    }));

    const player2 = k.add(createPlayerObj('2', k.width() - 100, {
      [CONTROLS.LEFT]: "left",
      [CONTROLS.RIGHT]: "right",
      [CONTROLS.UP] : 'up',
      [CONTROLS.DOWN] : 'down',
      [CONTROLS.ATTACK]: "control",
      [CONTROLS.DUCK]: "m",
      [CONTROLS.PUSH]: "n",
    }));
    player2.flipX = true
    // player1.play("IDLE");
    // player2.play("IDLE");


    // flip them if someone done it
    // k.onUpdate(() => {
    //     if (player1.pos.dist(player2.pos) < 100) { // only flip if they're close
    //         if (player1.pos.x < player2.pos.x) {
    //           player1.flipX = false
    //           player2.flipX = true
    //         } else {
    //           player1.flipX = true
    //           player2.flipX = false
    //         }
    //     }
    // });

    setupPlayerControls(k, player1, player2);
    setupPlayerControls(k, player2, player1);
  });
}
