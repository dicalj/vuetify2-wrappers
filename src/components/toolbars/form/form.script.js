//
export default {
  computed: {

    /**
     * 
     */
    _menuProps() {
      return {
        ...this.menuProps,
      }
    },

    /**
     * 
     */
    _titleProps() {
      return {
        ...this.titleProps,
      }
    },

    /**
     * 
     */
    _toolbarProps() {
      return {
        ...this.toolbarProps,
      }
    },

    /**
     * 
     */
    showMenu() {
      return !this.noMenu
    },

    /**
     * 
     */
    showTitle() {
      return !this.noTitle
    },

    /**
     * 
     */
    showToolbar() {
      return !this.noToolbar
    },
  },
  props: {

    /**
     * 
     */
    menuIcon: {
      type: String,
      default: 'mdi-dots-vertical',
    },

    /**
     * 
     */
    menuProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    noMenu: {
      type: Boolean,
      default: false,
    },

    /**
     * 
     */
    noTitle: {
      type: Boolean,
      default: false,
    },

    /**
     * 
     */
    noToolbar: {
      type: Boolean,
      default: false,
    },

    /**
     * 
     */
    title: {
      type: String,
      default: 'TITLE',
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
  }
}