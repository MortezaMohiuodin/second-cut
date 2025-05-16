export default function loadSprites(k){
    k.loadSprite('background', 'src/assets/background.jpg')
    k.loadSprite("player", "src/assets/sprites/player.png", {
        sliceX: 16,
        sliceY: 4,
        anims: {
            "IDLE": {
                from: 0,
                to: 9,
                speed: 5,
                loop: true,
            },
            "RUN": {
                from: 16,
                to: 30,
                speed: 10,
                loop: true,
            },
            "ATTACK": {
                from: 33,
                to: 37,
                speed: 10,
                loop: false,
            },
            "HURT": {
            from: 49,
            to: 54,
            speed: 10,
            loop: false,
            },
        },
    });

    k.loadSprite("player2", "src/assets/sprites/player-2.png", {
        sliceX: 15,
        sliceY: 9,
        anims: {
            "IDLE": {
                from: 0,
                to: 3,
                speed: 5,
                loop: true,
            },
            "RUN": {
                from: 31,
                to: 35,
                speed: 10,
                loop: true,
            },
            "ATTACK": {
                from: 105,
                to: 114,
                speed: 10,
                loop: false,
            },
            "HURT": {
            from: 74,
            to: 80,
            speed: 10,
            loop: false,
            },
        },
    });
}