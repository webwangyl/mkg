<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 09:52:33
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-08 10:35:38
-->
<template>
	<div class="home">
		<!-- <Dice></Dice> -->
		<!-- <Menu></Menu> -->
		<canvas id="homeCanvas"></canvas>
	</div>
</template>

<script>
import Dice from "@/components/Home/dice.vue";
import Menu from "@/components/Home/menu.vue";
import { Particles } from "@/plugins/canvasConstruct"

export default {
	name: "Home",
	components: {
		Dice,
		Menu,
	},
	data() {
		return {
			ch: null,
			ctx: null,
			time: 500,
			start: 0,
			ballArr: [],
		}
	},
	mounted() {
		this.init();
		this.initAir()
		window.addEventListener('click', event => {
			this.partocleShow(event.x, event.y)
		})
	},
	methods: {
		partocleShow(x, y) {
			let partocle = new Particles(x, y, 1, 1)
			partocle.show()
		},
		initAir() {
			this.ch = this.$canvasInit("homeCanvas");
			this.ctx = this.$ctx;
			let w = window.innerWidth, h = window.innerHeight
			const grd = this.ctx.createLinearGradient(0, 0, 300, 0)
			grd.addColorStop(0, 'blue')
			grd.addColorStop(1, 'skyblue')
		},
		Ball(startX, startY, endX, endY, time, ch,  radius = 1, color = 'red') {
			this.startX = startX
			this.startY = startY
			this.endX = endX
			this.endY = endY
			this.x = startX
			this.y = startY
			this.dx = (endX - startX)/time
			this.dy = (endY - startY)/time
			this.radius = radius
			this.color = color
			this.ch = ch
			this.update = () => {
				this.x += this.dx
				this.y += this.dy
				this.ch.$drawCircle('fill', { x: this.x, y: this.y, color: this.color, radius: this.radius })
			}
		},
		init() {
			/** @type {HTMLCanvasElement} */
			this.ch = this.$canvasInit("homeCanvas");
			this.ctx = this.ch.$ctx;
			let w = window.innerWidth, h = window.innerHeight
			this.ch.$drawText('fill', { x: 200, y: 200, text: 'MKG', fontSize: 100 })
			const cp = this.ctx.getImageData(0, 0, 400, 400)
			this.ctx.clearRect(0, 0, w, h)
			for(let y = 0;y < 400;y+=3) {
				for(let x = 0;x < 400;x+=3) {
					let index = x + y * 400
					let a = cp.data[index * 4 + 3]
					if(a > 128) {
						let startX = Math.floor(Math.random() * (w - 2) + 1)
						let startY = Math.floor(Math.random() * (h - 2) + 1)
						this.ballArr.push(new this.Ball(startX, startY,x,y, this.time, this.ch))
					}
				}
			}
			this.run()
		},
		run() {
			this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
			for(let i = 0; i < this.ballArr.length; i++) {
				this.ballArr[i].update()
			}
			this.start++
			if(this.start >= this.time) return
			requestAnimationFrame(() => {
				this.run()
			})
		},
	},
};
</script>

<style lang="scss">
.home {
	height: 100%;
	background: black;
	// padding: 100px;
}
</style>
