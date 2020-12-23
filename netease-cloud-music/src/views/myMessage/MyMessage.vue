<template>
  <div class="Mymessage">
    <div class="Mymessage1">
      <my-message-user v-if="$store.state.profile.userId !== ''" @click.native="information">
      </my-message-user>

      <my-message-login class="login" v-else @toLogin="toLogin"></my-message-login>
      <!-- 菜单 -->
      <my-message-menu></my-message-menu>
    </div>
  </div>
</template>

<script>

import MyMessageLogin from "./childrenComps/MyMessageLogin"; // 用户未登录组件
import MyMessageUser from "./childrenComps/MyMessageUser"; // 用户已登录组件
import MyMessageMenu from "./childrenComps/MyMessageMenu";

export default {
  name: "MyMessage",
  data() {
    return {
      isFixed: false,
      title: ["创建歌单", "收藏歌单", "歌单助手"],
    };
  },
  methods: {
    information(){

    },
    toLogin(){
      
    }
  },
  created() {},
  components: {
    MyMessageLogin,
    MyMessageUser,
    MyMessageMenu
  }
};
</script>

<style scoped>
.Mymessage {
  margin-top: 1.171771rem;
}
.MyMessage2 {
  margin-top: 1.171771rem;
  height: 100%;
  padding: 20px 15px 0;
}
.MyMessage3{
  height: 100%;
  padding: .133156rem .399467rem .532623rem;
  margin-bottom: 1.198402rem;
}
.jnavbar {
  margin-top: 44px;
  background-color: #fff;
  position: relative;
  padding: 0 15px;
  z-index: 15;
}
.v-enter {
  opacity: 0;
  /* 进来的时候从右 */
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  /* 离开的时候向左 */
  transform: translateX(-100%);
  position: absolute;
}

/* 动画执行期间 */
.v-enter-active,
.v-leave-active {
  /* 添加动画效果 */
  transition: all 0.2s linear;
}
</style>