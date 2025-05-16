import { PLAYER_SPEED } from "../constant";
import createAttackObj from "../obj/attack";

export default function setupPlayerControls(k, player, opponent) {
  const { left, right, attack , up , down} = player.controls;

  // Movement
  k.onKeyDown(left, () => {
    if (player.pos.x > 10) {
      player.move(-PLAYER_SPEED, 0);
      // if (player.getCurAnim()?.name !== "IDLE") {
      //   player.play("IDLE");
      // }
    }
  });

  k.onKeyDown(right, () => {
    if (player.pos.x < k.width() - 10) {
      player.move(PLAYER_SPEED, 0);
      // if (player.getCurAnim()?.name !== "RUN") {
      //   player.play("RUN");
      // }
    }
  })
   k.onKeyDown(up, () => {
    player.guard = 'up'
    player.color = BLUE
  });
   k.onKeyRelease(up, () => {
    player.guard = null
    player.color = WHITE
  });

   k.onKeyDown(down, () => {
    player.guard = 'down'
    player.color = YELLOW
  });
   k.onKeyRelease(down, () => {
    player.guard = null 
    player.color = WHITE
  });

  // Release - stop animation when keys released
  [left, right].forEach((key) => {
    k.onKeyRelease(key, () => {
      // if (!k.isKeyDown(left) && !k.isKeyDown(right)) {
      //   player.play("IDLE");
      // }
    });
  });

  // Attack
  k.onKeyDown(attack, () => {
    if (player.isAttacking) return;

    player.isAttacking = true;
    // player.play("ATTACK");

    const attackBox = k.add(createAttackObj(player,'middle'));
    attackBox.onCollide(opponent.name, (enemy) => {
      k.wait(0.2, () => {
        enemy.hurt(1)
        if(enemy.hp() <= 0){
          k.destroy(enemy);
        }
        enemy.color = BLACK
        k.wait(.3,()=>{
          enemy.color = WHITE
        })
      });
    });

    k.wait(0.5, () => {
      player.isAttacking = false;
      // player.play("IDLE");
    });
  });
}
