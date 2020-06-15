//
export default {
  computed: {

    /**
     * 
     */
    columns() {
      return this.headers.concat([ { text: 'actions', value: '$actions' } ])
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  props: { 

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
    label: {
      type: String,
      default : '',
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
    value: {
      type: Array,
      default: () => [],
    }
  }
}