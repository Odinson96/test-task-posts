export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setModal(event) {
      event.stopPropagation()
      this.$emit('setVisible')
    }
  }
}
