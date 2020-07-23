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
    checkboxProps: {
      type: Object,
      default: () => ({}),
    },
    
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
    rowProps: {
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