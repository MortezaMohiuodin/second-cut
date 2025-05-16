import { PLAYER_HEIGHT, PLAYER_WIDTH } from '../constant'
import {k} from '../main'


export default (id,startPos,controls)=>[
    k.pos(startPos,k.height() - 50),
    k.scale(1),
    k.rect(PLAYER_WIDTH,PLAYER_HEIGHT),
    // k.sprite(id === '1' ? 'player' : 'player2'),
    k.anchor("center"),
    k.area({ isSensor: true,shape: new k.Rect(k.vec2(0), 20, 35) }), // width: 20, height: 0
    k.body(),
     "player",
     `player${id}`,
    {
        name : `player${id}`,
        score : 0,
        isAttacking: false, // remove later
        facing: id == '1' ? 'right' : 'left',
        guard : null, // 'up' | 'down' | 'middle' remove later
        attack : null, // 'up' | 'down' | 'middle' remove later
        controls,
        dir: k.vec2(1,0),
        actionState : 'idle',  // "idle", "walk", "attack", "guard", "hit", "dead",
        hp : 2
    }
]