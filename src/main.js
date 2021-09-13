/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 09:52:33
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-06 17:01:01
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/base.scss";

// plugins
import gsap from "@/plugins/gsap";
import "@/plugins/canvasHelpers"

Vue.config.productionTip = false;
Vue.prototype.$gsap = gsap;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
