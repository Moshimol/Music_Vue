<template>
  <div class="Discover">
    <!-- banner列表 -->
    <discover-swiper style="margin-top:54px"> </discover-swiper>
    <!-- 分类导航的页面 -->
    <div class="mui-content" style="">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <a class="mui-control-item" @click="recommandSong">
              <div class="img">
                <img src="~assets/img/discover/rili.svg" alt="" />
              </div>
              <span>每日推荐</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/FM.svg" alt="" />
              </div>
              <span>私人FM</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/gedan.svg" alt="" />
              </div>
              <span>歌单</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/paihang.svg" alt="" />
              </div>
              <span>排行榜</span>
            </a>

            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/zhibo.svg" alt="" />
              </div>
              <span>直播</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/zhuanji.svg" alt="" />
              </div>
              <span>数字专辑</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/liaotian.svg" alt="" />
              </div>
              <span>唱聊</span>
            </a>
            <a class="mui-control-item">
              <div class="img">
                <img src="~assets/img/discover/youxi.svg" alt="" />
              </div>
              <span>游戏专区</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <discover-sheet></discover-sheet>
    <discover-songtop></discover-songtop>
    <discover-mv></discover-mv>
    <discover-hotsinger></discover-hotsinger>
  </div>
</template>

<script>
import DiscoverSwiper from "./childrenComps/DiscoverSwiper"; // 轮播图
import DiscoverSheet from "./childrenComps/DiscoverSheet"; // 热门歌单
import DiscoverSongtop from "./childrenComps/DiscoverSongTop"; // 新歌速递
import DiscoverMv from "./childrenComps/DiscoverMv"; // 最新MV
import DiscoverHotsinger from "./childrenComps/DiscoverHotSinger";  // 热门歌手

import mui from "assets/mui/js/mui.min.js"; // 引入 mui js 文件

// .mui-scroll-wrapper 表示需要进行滑动的区域
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
  name: "Discover",
  components: {
    DiscoverSwiper,
    DiscoverSheet,
    DiscoverSongtop,
    DiscoverMv,
    DiscoverHotsinger,
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
    // 点击进入日推界面
    recommandSong() {
      if (!this.$store.state.cookie) {
        this.$toast.show("请先登录", 2000);
        setTimeout(() => {}, 1000);
      } else {
      }
    },
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      bounce: true, //是否回弹
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: true, //是否显示滚动条
    });
  },
  created() {},
};
</script>

<style scoped>
.Discover {
  touch-action: none;
  margin-bottom: 55px;
}
.mui-content {
  margin-top: 0.399467rem;
  margin-bottom: 0.399467rem;
}
#slider {
  height: 1.864181rem;
}
#sliderSegmentedControl {
  height: 100%;
}
.mui-control-item {
  color: #000 !important;
  padding: 0 0.399467rem !important;
  text-align: center;
  font-size: 0.332889rem;
  height: 1.864181rem;
}
.mui-control-item span {
  position: relative;
  top: -8px;
}
.img {
  width: 1.198402rem;
  height: 1.198402rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, #d84e4e, red);
  margin: 0 auto;
  text-align: center;
  margin-bottom: 0.133156rem;
}
.img img {
  width: 0.639148rem;
  margin-top: 0.226365rem;
}
</style>
