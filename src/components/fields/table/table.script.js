//
export default {
  computed: {

    /**
     * 
     */
    tableProps() {
      return {
        items: this.value,
      }
    }
  },
  props: {

    /**
     * 
     */
    value: {
      type: Array,
      default: () => [],
    }
  }
}