//
import VwBtn from '../../buttons/button'
import VwDialogForm from '../../dialogs/form'
import VwDialogTable from '../../dialogs/table'

//
export default {
  components: {
    VwBtn,
    VwDialogForm,
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
        form: false,
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
     * { item_description }
     */
    onClickNew() {
      this.dialogs.form = !this.dialogs.form
    },

    /**
     * Called on submit dialog.
     *
     * @param      {object}  event   The event
     */
    onSubmit(event) {
      this.$emit('input', [
        ...this.value,
        ...event.items,
      ])
      this.dialogs.picker = false
    },

    /**
     * Called on submit dialog.
     *
     * @param      {object}  event   The event
     */
    onSubmitForm(event) {
      this.$emit('input', [
        ...this.value,
        event.item,
      ])
      this.dialogs.form = false
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
    dialogFormProps: {
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