import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ==============  elementUI ===============
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// ==============  公共css引入 ===============
import './assets/index.css'

// ==============  axios  ==================

import axios from 'axios'

axios.defaults.baseURL='/proxy_url';
// axios.defaults.baseURL='http://82.157.254.225:8000';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers['authorization'] = window.localStorage.getItem('token');
  config.headers['authorization'] = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJja3JAdGVzdC5jb20iLCJpZCI6NywiaWF0IjoxNjcwMjA4MjIwLCJqdGkiOiIxZTJkNzBiZi02M2EwLTRmYzItOThhZC1lODI5M2ExNTZmZGEifQ.EhZsYqGqrdtcctt-PgZp1Y_BFjcdH_5EzZr3Peic5T4"
  return config;
})
axios.interceptors.response.use(res => {
  return res;
}, error => {
  console.log(error.response.status)
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
      case 403:
        window.localStorage.clear()
        router.push('/login')
        break;
    }
  }
  return Promise.reject(new Error(error));
})
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
