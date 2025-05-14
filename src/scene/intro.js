import { k } from "../main"
export default function createIntroScene (){
    k.scene("intro",()=>{
        k.add([
            k.rect(k.width(),k.height()),
            k.color(BLACK),
        ])
        k.add([
            k.text('press any button',{
                size:16
            }),
            k.color(WHITE),
            k.pos(center()),
            k.anchor('center')
        ])
        k.onKeyPress(() => {
            k.wait(.5,()=>{
                k.go('fight')
            })
        });
    })
}