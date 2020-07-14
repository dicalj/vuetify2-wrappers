//
import VwLayoutNavigation from '../navigation'

//
export default {
  components: {
    VwLayoutNavigation,
  },
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
      set(val) {
        this.$emit('input', val)
      }
    },
  },
  props: {

    /**
     * 
     */
    drawerProps: {
      type: Object,
    },

    /**
     * 
     */
    listProps: {
      type: Object,
    },

    /**
     * 
     */
    value: {
      type: Boolean,
      default: false,
    },
  },
}