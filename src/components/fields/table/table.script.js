//
export default {
  computed: {

    /**
     * 
     */
    _tableProps() {
      return {
        ...this.tableProps,
        items: this.value,
      }
    }
  },
  props: {

    /**
     * 
     */
    tableProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    value: {
      type: Array,
      default: () => [],
    }
  }
}