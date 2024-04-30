<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton}
}
</script>

<template>
  <div class="bg">

  </div>
  <router-link to="/userPage">
    <custom-button class="navigateBtn">
      <h1>
        Welcome
      </h1>
    </custom-button>
  </router-link>
  <div class="circle" />

</template>

<style scoped>
.bg {
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: -2;
}

.navigateBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1;
  color: #FFFFFF;
  border: 3px solid #FFFFFF;
  border-radius: 15px;

  &:hover {
    background-color: #45c07a;
    color: #FFFFFF;
  }
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(101, 206, 51);
  box-shadow: 0 0 500px rgb(100, 255, 255), 0 0 200px rgb(100, 255, 255), 0 0 100px rgb(100, 255, 255), 0 0 50px rgb(100, 255, 255), 0 0 20px rgb(100, 255, 255), 0 0 10px rgb(100, 255, 255), 0 0 5px rgb(100, 255, 255);
  filter: blur(200px);
}
</style>
