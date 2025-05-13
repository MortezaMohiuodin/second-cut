import {k} from '../main'

export default ()=>[
    k.rect(k.width(), 24),
    k.area(),
    k.outline(1),
    k.pos(0, k.height() - 24),
    k.body({ isStatic: true }),
]


