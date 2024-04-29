<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CustomButton"
})
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 10px;
  padding: 15px 15px;
  background-color: none;
  color: teal;
  border: 1px solid teal;
}
</style>
