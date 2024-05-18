<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('model-value', event.target.value)
    }
  }
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" :placeholder="placeholder" class="input">
</template>

<style scoped>
.input {
  width: 90%;
  border: 2px solid darkgreen;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
}
</style>
