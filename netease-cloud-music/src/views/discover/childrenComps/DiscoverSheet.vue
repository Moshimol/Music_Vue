<template>
  <div class="DiscoverSheet">
    <div class="topTitle">
      <div class="left-text">懂你的精选歌单</div>
    </div>
    <div class="right-button">
        <div class="btn" @click="Sheet">查看更多</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverSheet",
  data() {
    return {
      offset: -1,
      sheetList: [],
    };
  },
  components: {},
  methods: {
    toSheet(id) {
      // 跳转到歌单的界面
    },
    sheet() {},
  },
};
</script>

<style>
.DiscoverSheet {
  margin-top: 0.532623rem;
}
.mui-control-item {
  padding: 0.213049rem 0.186418rem 0.399467rem !important;
}
#slider {
  height: 4.101198rem;
}
#sliderSegmentedControl {
  height: 100%;
}

.topTitle {
  width: 100%;
  display: flex;
  padding: 0 0.319574rem;
}

.left-text {
  flex: 1;
  font-size: 0.426099rem;
  font-weight: 550;
  line-height: 0.665779rem;
}

.right-button {
  flex: 1;
  position: relative;
  right: 15px;
  top: -22px;
}

.btn {
  float: right;
  width: 1.864181rem;
  height: 0.585885rem;
  font-size: 0.319574rem;
  /* padding: .053262rem .159787rem; */
  border-radius: 0.585885rem;
  text-align: center;
  line-height: 0.585885rem;
  border: 1px solid #919090;
}
</style>
