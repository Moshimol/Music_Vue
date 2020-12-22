import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;


Vue.use(VueRouter);


// 解决路由重复点击保存问题
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}


// 组件懒加载
const discover = () => import('views/discover/Discover')  // 发现页面组件
const cloudVillage = () => import('views/cloudVillage/CloudVillage')  // 云村页面组件

const routes = [
  { path: '/', redirect: '/discover' },
  {
    path: '/discover',
    component: discover,
  },
  { 
    path: '/cloudVillage', 
    component: cloudVillage,
  },
  { path: '/myMessage/login', component: () => import('components/context/login/Login') },
  { path: '/myMessage/login/phoneLogin', component: () => import('components/context/phoneLogin/PhoneLogin')  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
