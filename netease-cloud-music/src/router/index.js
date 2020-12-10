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

const routes = [
  { path: '/myMessage/login', component: () => import('components/context/login/Login') },
  { path: '/myMessage/login/phoneLogin', component: () => import('components/context/phoneLogin/PhoneLogin')  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
