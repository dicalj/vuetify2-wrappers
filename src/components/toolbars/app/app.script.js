//
export default {
  methods: {

    /**
     * 
     */
    onIcon() {
      this.$emit('click-icon'); console.log('click-icon:toolbar')
    },
  },
  props: {

    /**
     * 
     */
    iconProps: {
      type: Object,
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
    },

    /**
     * 
     */
    toolbarProps: {
      type: Object,
    },

    /**
     * 
     */
    tooltip: {
      type: String,
    },

    /**
     * 
     */
    tooltipProps: {
      type: Object,
    },
  },
}