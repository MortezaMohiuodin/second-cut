import {k} from '../main'


export default ()=>[
    k.pos(0,400),
    k.scale(1.5),
    k.sprite('player',{
        // sliceX: 10, // how many sprites are in the X axis
        // sliceY: 1, // how many sprites are in the Y axis
        // anims: {
        //     IDLE: { from: 0, to: 9, loop: true },
        // },
        // anims: {
        //     IDLE: { from: 0, to: 9, loop: true },
        //     // ghosty: { from: 4, to: 4 },
        // },
    })
]