//
export default {

  /**
   * 
   */
  fieldsetProps: {
    type: Object,
    default: () => ({
      style: {
        border: 0,
      }
    })
  },

  /**
   * 
   */
  flex: {
    type: Object,
    default: () => ({
      cols: 12,
      sm: 6,
      md: 4,
      lg: 3,
    })
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
  rowProps: {
    type: Object,
    default: () => ({
      dense: true,
    })
  },

  /**
   * 
   */
  value: {
    type: Object,
    default: () => ({}),
  }
}