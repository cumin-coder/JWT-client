// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import cookie from 'js-cookie'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

// axios 请求拦截器处理请求数据
axios.interceptors.request.use(config => {
  const token = cookie.get('token');
  config.headers['Authorization'] = 'Bearer ' + token; // 留意这里的 Authorization
  return config;
})

// axios 响应拦截器处理响应数据
axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err);
})


Vue.prototype.$axios = axios;
Vue.prototype.$cookie = cookie


/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
