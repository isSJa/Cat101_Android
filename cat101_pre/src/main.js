import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = axios


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

import { Message } from 'element-ui';
Vue.prototype.$message = function(msg) {
  return Message({
    message: msg,
    duration: 1500
  });
};
// 分别对success、warning和error等样式进行设置
Vue.prototype.$message.success = function(msg) {
  return Message.success({
    message: msg,
    duration: 1500
  });
};
Vue.prototype.$message.warning = function(msg) {
  return Message.warning({
    message: msg,
    duration: 1500
  });
};
Vue.prototype.$message.error = function(msg) {
  return Message.error({
    message: msg,
    duration: 1500
  });
};
