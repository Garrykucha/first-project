<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show');
    }
  }
}
</script>

<template>
  <div class="my-dialog" v-if="show" @click="hideDialog">
    <div class="my-dialog-item" @click.stop>
      <slot>

      </slot>
    </div>

  </div>
</template>

<style scoped lang="scss">
.my-dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;

  background-color: rgba(0, 0, 0, 0.5);

  &-item {
    background-color: #FFFFFF;
    box-shadow: 0 0 50px 0 rgba(0, 1, 1, 0.5);
    margin: auto;
    padding: 20px;
    width: 400px;
    border-radius: 5px;
  }
}
</style>
