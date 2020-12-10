<template>
  <div class="Toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message = "默认文本", time = 0) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, time);
    },
  },
};
</script>

<style scoped>
.Toast {
  position: fixed;
  /* 通过 translate 偏移自身高度和宽度的一半 */
  /* 居中 */
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  color: #fff;
  top: 50%;
  left: 50%;
  z-index: 201;
  background-color: rgba(0, 0, 0, 0.6);
  animation: toastA 2s linear;
  font-size: 15px;
}
@keyframes toastA {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
