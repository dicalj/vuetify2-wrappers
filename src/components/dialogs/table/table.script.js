// required components
import VwBtn from '../../buttons/button'
import VwTable from '../../table'

// component
export default {
  components: {
    VwBtn,
    VwTable,
  },
  computed: {

    /**
     * The computed value.
     */
    _value: {

      /**
       * 
       */
      get() {
        return this.value
      },

      /**
       * 
       */
      set(val) {
        this.$input(val)
      },
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  methods: {

    /**
     * { item_description }
     */
    onClickClose() {
      this.$emit('input', false)
    },

    /**
     * { item_description }
     */
    onSubmit() {
      this.$emit('submit', {
        items: this.selected,
      })
    },
  },
  props: {

    /**
     * The v-card-actions properties.
     */
    actionsProps: {
      type: Object,
      default: () => ({
        class: 'justify-end',
      }),
    },

    /**
     * The vw-btn properties.
     */
    buttonProps: {
      type: Object,
      default: () => ({
        text: true,
      }),
    },

    /**
     * The v-card properties.
     */
    cardProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-dialog properties.
     */
    dialogProps: {
      type: Object,
      default: () => ({
        width: 800,
      }),
    },

    /**
     * The vw-table proeprties.
     */
    tableProps: {
      type: Object,
      default: () => ({
        headers: [],
      }),
    },

    /**
     * The v-card-text proeprties.
     */
    textProps: {
      type: Object,
      default: () => ({
        class: 'pa-0',
      }),
    },

    /**
     * The v-card-title text proeprty.
     */
    title: {
      type: String,
      default: 'Agregar',
    },

    /**
     * The v-card-title proeprties.
     */
    titleProps: {
      type: Object,
      default: () => ({
        class: 'py-4',
      }),
    },

    /**
     * The v-dialog v-model value.
     */
    value: Boolean,
  },
}