export default {
  computed: {

    /**
     * 
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
      set(value) {
        this.$emit('input', value)
      }
    },

    /**
     * 
     */
    readonly() {
      return this?.pickerProps?.readonly
    },

    /**
     * 
     */
    selectButtonText() {
      return this.readonly ? this.disabledText : this.enabledText
    },

    /**
     * 
     */
    selectButtonProps() {
      return {
        color: this.readonly ? '' : 'primary'
      }
    },
  },
  data () {
    return {
      modal: false,
    }
  },
  props: {

    /**
     *
     */
    dialogProps: {
      type: Object,
      default: () => ({
        width: 300,
      }),
    },

    /**
     *
     */
    fieldProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    disabledText: {
      type: String,
      default: 'Revisar',
    },

    /**
     * 
     */
    enabledText: {
      type: String,
      default: 'Seleccionar',
    },

    /**
     * 
     */
    icon: {
      type: String,
      default: 'mdi-clock-outline',
    },

    /**
     *
     */
    pickerProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     *
     */
    rules: {
      type: Array,
      default: () => [],
    },

    /**
     *
     */
    value: String,
  },
  methods: {

    /**
     * 
     */
    onClickSelectButton() {
      this.modal = true
    },
  },
}