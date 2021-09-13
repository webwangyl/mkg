<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-03 13:53:43
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-03 13:56:36
-->
<template>
    <div class="component-cloud">
        <div class="cloud-left"></div>
        <div class="cloud-top"></div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
      return {
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
.component-cloud {
    position: relative;
    .cloud-left {
        background: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: 10px;
    }
    .cloud-top {
        background: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        left: 20px;
    }
}
</style>