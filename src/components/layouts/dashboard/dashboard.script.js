//
import VwToolbarApp from '../../toolbars/app'

//
export default {
  components: {
    VwToolbarApp,
  },
  props: {

    /**
     * 
     */
    contentProps: {
      type: Object,
    },

    /**
     * 
     */
    drawerProps: {
      type: Object,
    },

    /**
     * 
     */
    itemsProps: {
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
  },
}