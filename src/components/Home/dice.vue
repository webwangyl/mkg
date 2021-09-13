<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 10:54:00
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-03 13:30:06
-->
<template>
	<div class="component-dice" :style="diceStyle">
		<div class="ct">
			<div
				v-for="item in dices"
				:key="item"
				:class="`dice-${item}`"
			>
        {{ item }}
      </div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		diceWidth: {
			type: Number,
			default: 100,
		},
	},
	data() {
		return {
			dices: [1, 2, 3, 4, 5, 6],
		};
	},
	watch: {},
	computed: {
		diceStyle() {
			return {
				"--dice-tance": this.diceWidth + "px",
				"--half-tance": this.diceWidth / 2 + "px",
				"--fud-half": "-" + this.diceWidth / 2 + "px",
				"--dice-radius": this.diceWidth / 10 + "px",
			};
		},
	},
	methods: {},
	created() {},
	mounted() {},
	destroyed() {},
};
</script>
<style lang="scss">
@import "@/assets/css/animation.scss";
$dice-tance: var(--dice-tance);
$half-tance: var(--half-tance);
$fud-half: var(--fud-half);
$dice-radius: var(--dice-radius);
$transform-list: translateZ($half-tance) translateZ($fud-half)
	(rotateX(90deg) translateZ($half-tance))
	(rotateX(90deg) translateZ($fud-half))
	(translateX($half-tance) rotateY(90deg))
	(translateX($fud-half) rotateY(90deg));

.component-dice {
	.ct {
		width: $dice-tance;
		height: $dice-tance;
		transform-style: preserve-3d;
		animation: dice_ship 2s infinite;
	}
	.ct:hover {
		animation-play-state: paused;
	}
	div[class^="dice"] {
		width: $dice-tance;
		height: $dice-tance;
		// border: 1px solid red;
		position: absolute;
		text-align: center;
		line-height: $dice-tance;
		box-shadow: 0 0 15px 0 #fff;
		border-radius: $dice-radius;
		color: #fff;
	}
	@for $i from 1 through 6 {
		.dice-#{$i} {
			transform: nth($transform-list, $i);
		}
	}
}
</style>
