<template>
  <Navbar></Navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/pages/Navbar.vue";

export default {
  components: {Navbar}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>