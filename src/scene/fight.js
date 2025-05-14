import { k } from '../main';
import createPlaygroundObj from '../obj/playground';
import createPlayerObj from '../obj/player';
import createPlatformObj from '../obj/platform';
import setupPlayerControls from '../util/setupPlayerControls';

export default function createFightScene() {
  k.scene("fight", () => {
    k.setGravity(640);

    const playground = k.add(createPlaygroundObj());
    const platform = k.add(createPlatformObj());

    const player1 = k.add(createPlayerObj('1', 100, {
        left: "a",
        right: "d",
        attack: "space",
    }));

    const player2 = k.add(createPlayerObj('2', k.width() - 100, {
      left: "left",
      right: "right",
      attack: "up",
    }));
    player2.flipX = true
    player1.play("IDLE");
    player2.play("IDLE");

    k.onUpdate(() => {
        if (player1.pos.dist(player2.pos) < 100) { // only flip if they're close
            if (player1.pos.x < player2.pos.x) {
            player1.flipX = false
            player2.flipX = true
            } else {
            player1.flipX = true
            player2.flipX = false
            }
        }
    });

    setupPlayerControls(k, player1, player2);
    setupPlayerControls(k, player2, player1);
  });
}
