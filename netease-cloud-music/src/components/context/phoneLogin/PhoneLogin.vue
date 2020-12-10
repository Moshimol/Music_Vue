<template>
  <div class="PhoneLogin">
    <navbar class="navbar">
      <div @click="back" class="left" slot="left">
        <img src="~assets/img/myMessage/fanhui.png" alt="" />
      </div>
      <div class="title" slot="center">手机号登陆</div>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
export default {
  name: "PhoneLogin",
  components: {
    navbar,
  },
};
</script>

<style></style>
