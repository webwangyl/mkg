<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-03 13:34:15
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-03 13:54:53
-->
<template>
    <div class="component-menu">
        <Cloud></Cloud>
        <div ref="menu" class="menu" @mouseenter="hoverAmt">
            1111
        </div>
    </div>
</template>

<script>
import Cloud from '@/components/Common/cloud.vue'

export default {
    components: {
        Cloud
    },
    props: {},
    data() {
      return {
          tl: null,
      };
    },
    watch: {},
    computed: {},
    methods: {
        initAmt() {
            this.tl = new this.$gsap.TimelineMax()
            this.tl.from('.menu', {
                opacity: 0,
                duration: 1,
            })
        },
        hoverAmt() {
            this.$refs.menu.style = {}
        }
    },
    created() {},
    mounted() {
        this.initAmt()
    },
    destroyed() {}
};
</script>
<style lang="scss">
.component-menu {
    opacity: 1;
}
</style>