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
      this.$emit('select', event.target.value);
    }
  },
}


</script>

<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите значение</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
select {
  padding: 5px;
}
</style>
