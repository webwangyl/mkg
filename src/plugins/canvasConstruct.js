/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-08 09:54:24
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-08 10:35:23
 */
import {$drawLine,$clearRect} from './canvasHelpers'

export class Particles {
    constructor(x, y, dx, dy, opcity = 255, color = '#2323fe') {
        this.x = x
        this.y = y
        this.x1 = x + 5
        this.dx = dx
        this.dy = dy
        this.opcity = opcity
        this.color = color
    }
    show = () => {
        $drawLine([this.x, this.y], [this.x1, this.y], { color: this.color, lineWidth: 4 })
        requestAnimationFrame(this.update)
    }
    update = () => {
        $clearRect(this.x, this.y - 2, 5, 4)
        this.x += this.dx
        this.y += this.dy
        this.opcity -= 16
        if(this.opcity <= 0) return
        this.show()
    }
}
