//
export default {
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
  }
}