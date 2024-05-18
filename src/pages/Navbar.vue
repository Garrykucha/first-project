<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  name: "Navbar",
  components: {CustomButton}
}
</script>

<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <CustomButton @click="$router.push('/posts')">Пользователи</CustomButton>
      <CustomButton @click="$router.push('/about')" style="margin-left: 20px">О сайте</CustomButton>
      <CustomButton @click="$router.push('/store')" style="margin-left: 20px">Store</CustomButton>
      <CustomButton @click="$router.push('/composition')" style="margin-left: 20px">Composition</CustomButton>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 60px;
  background-color: teal;

  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>