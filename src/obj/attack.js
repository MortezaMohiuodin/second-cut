import { ATTACK_AREA, ATTACK_RANGE, PLAYER_WIDTH } from '../constant'
import {k} from '../main'

export default (player, area = 'down')=>[
    k.rect(ATTACK_RANGE, 8), // or use sprite("slash") if you have one
    k.pos(player.pos.x + (player.facing === 'right' ? PLAYER_WIDTH/2 + 10 : -PLAYER_WIDTH/2 -ATTACK_RANGE - 10), player.pos.y - ATTACK_AREA[area]), // adjust based on facing direction
    k.area(),
    k.lifespan(0.2), // disappear after 0.2s
    k.color(RED),
    k.opacity(),
    "attack",
]

