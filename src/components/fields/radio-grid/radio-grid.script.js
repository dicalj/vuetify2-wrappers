//
export default {
  computed: {

    /**
     * 
     */
    _value: {

      /**
       * 
       */
      get() {
        return this.value
      },

      /**
       * 
       */
      set(val) {
        this.$emit('input', val)
      },
    },
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
    headerText: {
      type: String,
      default: 'text',
    },

    /**
     * 
     */
    headerValue: {
      type: String,
      default: 'value',
    },

    /**
     * 
     */
    items: {
      type: Array,
      default: () => [],
    },

    /**
     * 
     */
    itemText: {
      type: String,
      default: 'text',
    },

    /**
     * 
     */
    itemValue: {
      type: String,
      default: 'value',
    },
    
    /**
     * 
     */
    radioProps: {
      type: Object,
      default: () => ({}),
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
    },
  }
}