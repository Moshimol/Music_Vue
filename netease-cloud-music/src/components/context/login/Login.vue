<template>
  <div class="Login">
    <div class="close" @click="close">
      <img src="~assets/img/myMessage/guanbi.png" alt="" />
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
</style>
