<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
}


</script>

<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option value="">Выберите значение</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.select {
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  padding: 4px;
}
</style>
