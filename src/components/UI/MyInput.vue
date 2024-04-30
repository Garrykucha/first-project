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
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  padding: 15px;

}
</style>
