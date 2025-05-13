import {k} from '../main'
import createPlaygroundObj from '../obj/playground'
import createPlayerObj from '../obj/player'

export default function createFightScene(){
    k.scene("fight",()=>{
        // add objects
        const playground = k.add(createPlaygroundObj())
        const player = k.add(createPlayerObj())
        player.play("IDLE");
        // console.log('fight')
        // player.play("IDLE")
    })
}

