//
export default {

  /**
   * 
   */
  props: {

    /**
     * 
     */
    prevProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    toolbarProps: {
      type: Object,
      default: () => ({
        flat: true,
      }),
    },
  }
}