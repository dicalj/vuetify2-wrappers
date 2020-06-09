//
export default {
  computed: {

    /**
     * 
     */
    tableProps() {
      return {
        headers: this.headers,
        items: this.value,
      }
    }
  },
  props: {

    /**
     * 
     */
    headers: {
      type: Array,
      default: () => [],
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