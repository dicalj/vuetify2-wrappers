//
export default {

  /**
   * The container properties.
   */
  containerProps: {
    type: Object,
    default: () => ({
      fluid: true,
    })
  },

  /**
   * The fieldset properties.
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
   * The flex properties.
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
   * The fieldset items.
   */
  items: {
    type: Array,
    default: () => [],
  },

  /**
   * The row properties.
   */
  rowProps: {
    type: Object,
    default: () => ({
      dense: true,
    })
  },

  /**
   * The fieldset value.
   */
  value: {
    type: Object,
    default: () => ({}),
  }
}