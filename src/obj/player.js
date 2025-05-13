import {k} from '../main'


export default ()=>[
    k.pos(400,k.height() - 50),
    k.scale(1),
    k.sprite('player'),
    k.anchor("center"),
    k.area({ shape: new k.Rect(k.vec2(0), 20, 35) }), // width: 20, height: 0
    k.body(),
     "player",
]