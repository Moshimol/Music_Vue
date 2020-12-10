<template>
  <navbar id="navbar">
    <div id="leftbox" @click="leftPopup" slot="left">
      <img src="~assets/img/common/hanbaotu.png" alt="" />
    </div>
    <div slot="center">
      <span
        class="navbarTitle"
        v-for="(item, index) in titleList"
        :key="index"
        @click="itemClick(index)"
        :class="{ activeTitle: index === currentIndex }"
      >
        {{ item }}
      </span>
    </div>
    <div id="rightbox" slot="right" @click="toSearch">
      <img src="~assets/img/common/sousuo.png" alt="" />
    </div>
  </navbar>
</template>

<script>
import navbar from "../../common/navbar/navbar";
export default {
  data() {
    return {
      titleList: ["我的", "发现", "云村", "视频"],
      currentIndex: 1,
    };
  },
  methods: {
    leftPopup() {
      this.$EventBus.$emit("openPopup", () => {}); // 事件总线
    },
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
#leftbox img {
  width: 20px;
  height: 20px;
  margin-top: 11px;
}
#rightbox img {
  width: 20px;
  height: 20px;
  margin-top: 11px;
}
#navbar {
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.4) !important;
}
.navbarTitle {
  font-size: 15px;
  padding: 0 7px;
  color: rgb(116, 116, 116);
}
.activeTitle {
  font-size: 18px;
  color: #000;
}
</style>
