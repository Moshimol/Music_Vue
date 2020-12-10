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
import 'assets/mui/css/mui.css'

// 全局注册
import { Swipe, SwipeItem } from 'vant'; // 轮播图组件
import { Field } from 'vant';
import { CellGroup } from 'vant'
import { Button } from 'vant'
import { Loading } from 'vant';
import { Slider } from 'vant';
import { ActionSheet } from 'vant';
import { ShareSheet } from 'vant';
import { ImagePreview } from 'vant';
import { Popup } from 'vant';

// 引入css样式
import 'vant/lib/index.css';
Vue.use(Swipe)  // 安装组件
Vue.use(SwipeItem)  
Vue.use(Field);  // 输入框
Vue.use(CellGroup)  
Vue.use(Button)  // 按钮
Vue.use(Loading);  // 加载动画
Vue.use(Slider);  // 滑块
Vue.use(ActionSheet);  // 动作面板
Vue.use(ShareSheet);  // 分享面板
Vue.use(ImagePreview);
Vue.use(Popup);

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
