import {k} from '../main'

export default ()=>[
    k.rect(k.width(), 5),
    k.area(),
    k.color(BLACK),
    k.outline(1),
    k.pos(0, k.height() - 5),
    k.body({ isStatic: true }),
]


