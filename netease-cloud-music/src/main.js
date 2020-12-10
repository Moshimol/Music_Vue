import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

// 引入 elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入 mui 基本css样式
import 'assets/mui/css/mui.css';

// 时间转换
Vue.filter('mvTime',function(time){
  return (time / 1000 / 60 <= 9 ? '0' + Math.floor(time / 1000 / 60) :  Math.floor(time / 1000 / 60)) + ':' + (time / 1000 % 60 <= 9 ? '0' + time / 1000 % 60 : time / 1000 % 60)
});

// 引入 toast 组件
import toast from 'components/common/toast'
Vue.use(toast)  // 安装 toast 组件


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
