<template>
  <div id="app">
    <music-navbar class="appnav"></music-navbar>
  </div>
</template>

<script>
import musicNavbar from "components/context/musicNavbar/MusicNavbar";
export default {
  name: "App",
  components: {
    musicNavbar,
  },
};
</script>

<style>
/* 整体的css导入 */
@import "./assets/css/base.css";

::-webkit-scrollbar {
  display: none;
}

.appnav {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.7);
  z-index: 19;
}

#app {
  overflow-x: hidden;
  background-color: #f0efef;
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
}

/* 动画执行期间 */
.v-enter-active,
.v-leave-active {
  /* 添加动画效果 */
  transition: all 0.2s linear;
}
</style>
