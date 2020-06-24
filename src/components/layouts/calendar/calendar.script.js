//
export default {
  props: {

    /**
     * 
     */
    calendarProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    itemsProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    title: {
      type: String,
    },

    /**
     * 
     */
    titleProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    toolbarProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    sheetProps: {
      type: Object,
      default: () => ({}),
    },
  }
}