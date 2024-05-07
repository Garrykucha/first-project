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
  padding: 15px 15px;
  cursor: pointer;
  align-self: flex-end;
  background-color: none;
  font-weight: bold;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background-color: teal;
    color: white;
  }
}
</style>
