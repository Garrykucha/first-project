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
      this.$emit('update:modelValue', event.target.value)
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
  border: none;
  padding: 15px;
  margin-top: 15px;
}
</style>
