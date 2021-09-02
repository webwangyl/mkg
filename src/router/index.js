/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 09:52:33
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-02 10:59:59
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 解决重复点击菜单报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router = new VueRouter({
	routes,
});

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
	next();
});

export default router;
