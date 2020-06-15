//
export default {
  computed: {

    /**
     * 
     */
    columns() {
      return this.noActions ? this.headers : this.headers.concat([ { text: this.actionsText, value: '$actions' } ])
    },

    /**
     * 
     */
    headers() {
      return this.tableProps ? this.tableProps.headers ? this.tableProps.headers : [] : []
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
    actionsText: {
      type: String,
      default: 'Acciones',
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
    label: {
      type: String,
      default : '',
    },

    /**
     * 
     */
    noActions: {
      type: Boolean,
      default: false,
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