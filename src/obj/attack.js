import {k} from '../main'

export default (player)=>[
    k.rect(30, 10), // or use sprite("slash") if you have one
    k.pos(player.pos.x + 10, player.pos.y - 15), // adjust based on facing direction
    k.area(),
    k.lifespan(0.2), // disappear after 0.2s
    k.color(RED),
    k.opacity(),
    "attack",
]

