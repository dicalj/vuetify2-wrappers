//
export default {
  computed: {

    /**
     * 
     */
    clipped() {
      return !! this.$vuetify.breakpoint.lgAndUp
    },

    /**
     * 
     */
    elevated() {
      return this.raised || scrollY ? elevation : 0
    },
  },
  methods: {

    /**
     * 
     */
    onIcon() {
      this.$emit('click-icon'); console.log('click-icon:toolbar')
    },

    /**
     * 
     */
    onScroll() {
      this.scrollY = window.scrollY
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
  created () {
    window.addEventListener("scroll", this.scrolled)
  },
}