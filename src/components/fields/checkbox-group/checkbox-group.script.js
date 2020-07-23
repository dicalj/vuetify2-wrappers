//
export default {
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