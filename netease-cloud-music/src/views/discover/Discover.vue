<template>
  <div class="Discover">
    <!-- banner列表 -->
    <discover-swiper style="margin-top:54px"> </discover-swiper>
  </div>
</template>

<script>
import DiscoverSwiper from "./childrenComps/DiscoverSwiper"; // 轮播图

import mui from "assets/mui/js/mui.min.js"; // 引入 mui js 文件

// .mui-scroll-wrapper 表示需要进行滑动的区域
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
  name: "Discover",
  components: {
    DiscoverSwiper,
  },
  data() {
    return {
      offset: -1,
    };
  },
  methods: {
    // 点击日推
    recommandSong() {
      if (!this.$store.state.cookie) {
        this.$toast.show("请先登录", 1900);
        setTimeout(() => {
          this.$router.push("/myMessage/login");
        }, 1000);
      } else {
        // 跳转到日推的界面
      }
    },
  },
};
</script>

<style></style>
