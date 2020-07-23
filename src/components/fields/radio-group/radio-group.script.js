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
    groupProps: {
      type: Object,
      default: () => ({}),
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
    value: {
      type: Array,
      default: () => [],
    },
  }
}