<template>
  <div class="Login">
    <div class="close" @click="close">
      <img src="~assets/img/myMessage/guanbi.png" alt="" />
    </div>

    <div class="logo">
      <img src="~assets/img/myMessage/wangyiyun.png" alt="" />
    </div>

    <!-- 手机号登录的按钮 -->
    <div class="phoneLogin" @click="phoneLogin">
      <span>手机号登录</span>
    </div>

    <div class="tiyan">
      <span>立即体验</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: {},
  methods: {
    close() {
      this.$router.go(-1);
    },
    phoneLogin() {
      this.$router.push("/myMessage/login");
    },
  },
};
</script>

<style scoped>
.Login {
  background-color: #bd3126;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 51;
}

.close img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
  margin-left: 15px;
}

.logo {
  width: 64px;
  height: 64px;
  background-color: white;
  margin: 60px auto 200px;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.144);
}
.logo img {
  width: 100%;
  height: 100%;
}

.phoneLogin {
  width: 80%;
  height: 40px;
  background-color: #fff;
  margin: 0 auto 0.532623rem;
  border-radius: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #da231b;
}

.tiyan {
  width: 80%;
  height: 40px;
  margin: 0.532623rem auto;
  border-radius: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  border: 1px solid rgb(221, 221, 221, 0.8);
}

/* 动画执行期间 */
.v-enter-active,
.v-leave-active {
  /* 添加动画效果 */
  transition: all 0.2s linear;
}
</style>
