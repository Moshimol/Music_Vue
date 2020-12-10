// 引入 toast 组件
import Toast from './toast'

// 创建一个 obj 对象
const obj = {}

// 通过 Vue.use() 安装了该 js 文件后就会第一时间执行 install 函数中内容
// install 函数默认有一个参数是 Vue ，整个 Vue 对象
obj.install = function(Vue){
  const toastContrustor = Vue.extend(Toast);

  const toast = new toastContrustor();

  // 通过monut 来挂载 创建Div并且挂载上去
  toast.$mount(document.createElement('div'));

  // 将toast 挂载到body上
  document.body.appendChild(toast.$el);

 // 在 Vue 的 prototype 中添加新的指令
 // 这样在其他组件中通过指令来调用 toast 组件模板中的方法
  Vue.prototype.$toast = toast;

};

// 导出 obj 对象
export default obj;