/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 09:52:33
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-02 11:22:36
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
