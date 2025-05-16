import { k } from '../main';
import createPlaygroundObj from '../obj/playground';
import createPlatformObj from '../obj/platform';
import setupPlayerControls from '../util/setupPlayerControls';
import { CONTROLS } from '../constant';

export default function createFightScene(player1,player2) {
  k.scene("fight", () => {
    k.setGravity(640);

    k.add(createPlaygroundObj());
    k.add(createPlatformObj());
    k.add(player1)
    k.add(player2)
    k.add([k.text(player1.score), pos(12, 12)]);
    k.add([k.text(player2.score), pos(k.width() - 30, 12)]);
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
