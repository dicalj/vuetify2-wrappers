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
      return this.pickerProps && this.pickerProps.readonly
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
        color: this.readonly ? '' : 'primary',
        style: {
          marginTop: '-2px',
        }
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
    acceptText: {
      type: String,
      default: 'aceptar',
    },

    /**
     * 
     */
    cancelText: {
      type: String,
      default: 'cancelar',
    },

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
    value: {
      type: String,
      default: '',
    },
  },
  methods: {

    /**
     * 
     */
    onClickAcceptButton() {
      this.modal = false
    },

    /**
     * 
     */
    onClickCancelButton() {
      this.modal = false
    },

    /**
     * 
     */
    onClickSelectButton() {
      this.modal = true
    },
  },
}