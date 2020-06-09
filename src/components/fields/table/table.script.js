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
    label: {
      type: String,
      default : '',
    },

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