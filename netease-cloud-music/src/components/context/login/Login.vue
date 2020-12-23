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

import { phoneLogin, loginState } from "network/login"; // 网络请求
import { getUserDetail, getUserPlayList } from "network/user"; // 用户信息

export default {
  name: "Login",
  data: {},
  methods: {
    close() {
      this.$router.go(-1);
    },
    phoneLogin() {
      // 这里直接去做相关登录的APi 
      // TODO: 需要手机和密码
      var phoneNumber = "";
      var password = "";
      
      // 手机号 
      var reg = /^1[3-8][0-9]{9}$/;

      if(reg.test(phoneNumber)) {
        this.$loading.loadingShow();
        phoneLogin(phoneNumber, password).then(res => {
          this.$store.state.cookie = res.data.cookie;
          if(res.data.code === 200) {
            this.$toast.show("登录成功！", 1900);
            this.close();

            this.$store.state.profile.nickName = res.data.profile.nickname; // 用户名
            this.$store.state.profile.avatarUrl = res.data.profile.avatarUrl; // 头像
            this.$store.state.profile.userId = res.data.profile.userId; // id
            this.$store.state.profile.backgroundUrl = res.data.profile.backgroundUrl; // 背景图

            // 获取用户信息
            getUserDetail(this.$store.state.profile.userId).then((res) => {
              this.$store.state.profile.level = res.data.level;
              this.$store.state.profile.listenSongs = res.data.listenSongs;
            });
            // 获取用户的歌单
            // 获取用户歌单
            getUserPlayList(this.$store.state.profile.userId).then((res) => {
              for (const item of res.data.playlist) {
                this.$store.state.playList.push({
                    coverImgUrl: item.coverImgUrl,
                    name: item.name,
                    id: item.id,
                    playCount: item.playCount,
                    trackCount: item.trackCount,
                    creator: item.creator.nickname,
                   });
                }
            });
            this.$loading.loadingNo();
          }
        },
        (err) => {
            this.$toast.show("网络出错！", 1900);
          }
        );
      }else {
        this.$toast.show("登录成功",2000);
      }

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
