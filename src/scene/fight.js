import {k} from '../main'
import createPlaygroundObj from '../obj/playground'
import createPlayerObj from '../obj/player'
import createPlatformObj from '../obj/platform'
import createEnemyObj from '../obj/enemy'

import { PLAYER_SPEED } from '../constant'
export default function createFightScene(){
    k.scene("fight",()=>{
        k.setGravity(640);
        // add objects
        const playground = k.add(createPlaygroundObj())
        const player = k.add(createPlayerObj())
        const platform = k.add(createPlatformObj())
        const enemy = k.add(createEnemyObj())
        player.play("IDLE");
        
        k.onKeyDown("left", () => {
            if(player.pos.x <= 10) return
            player.move(-PLAYER_SPEED, 0);
            if (player.getCurAnim()?.name !== "IDLE") {
                player.play("IDLE");
            }
        });

        k.onKeyDown("right", () => {
            if(player.pos.x >= k.width() - 10) return
            player.move(PLAYER_SPEED, 0);
            if (player.getCurAnim()?.name !== "RUN") {
                player.play("RUN");
            }
        });
        ["left", "right"].forEach((key) => {
            k.onKeyRelease(key, () => {
                if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
                    player.play("IDLE");
                }
            });
        });
        k.onKeyDown("space",()=>{
            if(player.getCurAnim()?.name !== "ATTACK"){
                player.play("ATTACK")
                setTimeout(()=>{
                    player.play("IDLE")
                },500)
            }
        })
        player.onCollide("enemy", (enemy) => {
            k.destroy(enemy);
        });
    })
}

