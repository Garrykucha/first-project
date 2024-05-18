export default {
  data() {
    return {
      lol: 3,
    }
  },
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