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
  }
}