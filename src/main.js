// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as echarts from 'echarts'
// 引入icon样式
import '../src/assets/fonts/icomoon.css'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  
  template: '<App/>',
  components: { App }
})
