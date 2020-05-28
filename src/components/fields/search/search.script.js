// required components
import VwBtn from '../../buttons/button'

//
export default {
  components: {
    VwBtn,
  },
  computed: {
    closeShow() {
      return this.value.length > 0
    },
    searchDisabled() {
      return this.value.length < 1
    },
    _value: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    }
  },
  methods: {

    /**
     * 
     */
    submitRemove() {
      this._value = ''
    },

    /**
     * 
     */
    submitSearch() {
      this.$emit('click-search')
    },
  },
  props: {
    closeIcon: {
      type: String,
      default: 'mdi-close',
    },
    closeIconProps: {
      type: Object,
      default: () => ({
        small: true,
      }),
    },
    closeProps: {
      type: Object,
      default: () => ({
        bottom: true,
        color: 'error',
        icon: true,
        small: true,
        tip: 'Limpiar',
      }),
    },
    fieldProps: {
      type: Object,
      default: () => ({
        flat: true,
        hideDetails: true,
        placeholder: 'Buscar...',
        rounded: false,
        solo: true,
        style: {
          borderRadius: 0,
        },
      })
    },
    searchIconProps: {
      type: Object,
      default: () => ({
        small: true,
      }),
    },
    searchProps: {
      type: Object,
      default: () => ({
        bottom: true,
        color: 'accent',
        icon: true,
        small: true,
        tip: 'Buscar',
      }),
    },
    value: {
      type: String,
      default: '',
    }
  }
}