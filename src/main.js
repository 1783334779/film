import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
axios.defaults.baseURL="http://yexin.applinzi.com"
import './reset.css'
//7:配置保存session信息
axios.defaults.withCredentials=true
Vue.config.productionTip = false
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
