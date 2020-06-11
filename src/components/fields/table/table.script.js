//
import VwBtn from '../../buttons/button'
import VwDialogTable from '../../dialogs/table'

//
export default {
  components: {
    VwBtn,
    VwDialogTable,
  },
  computed: {

    /**
     * 
     */
    _tableProps() {
      return {
        ...this.tableProps,
        items: this.value,
      }
    },
  },
  data() {
    return {
      dialogs: {
        picker: false,
      }
    }
  },
  methods: {

    /**
     * { item_description }
     */
    onClickAdd() {
      this.dialogs.picker = !this.dialogs.picker
    },

    /**
     * Called on submit dialog.
     *
     * @param      {object}  event   The event
     */
    onSubmitDialog(event) {
      this.$emit('input', [
        ...this.value,
        ...event.items,
      ])
    },
  },
  props: { 

    /**
     * 
     */
    dialogProps: {
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