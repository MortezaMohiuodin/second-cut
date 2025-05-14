import {k} from '../main'


export default (id,startPos,controls)=>[
    k.pos(startPos,k.height() - 50),
    k.scale(1),
    k.sprite(id === '1' ? 'player' : 'player2'),
    k.anchor("center"),
    k.area({ isSensor: true,shape: new k.Rect(k.vec2(0), 20, 35) }), // width: 20, height: 0
    // k.body(),
     "player",
     `player${id}`,
    {
        name : `player${id}`,
        isAttacking: false,
        controls
    }
]