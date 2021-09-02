<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 09:52:33
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-02 11:49:23
-->
<template>
	<div class="home">
    <Dice></Dice>
  </div>
</template>

<script>
import Dice from "@/components/Home/dice.vue";

export default {
	name: "Home",
	components: {
		Dice,
	},
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: #2b2f30;
  padding-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
