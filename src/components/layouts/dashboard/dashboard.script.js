//
import VwLayoutDrawer from '../../layouts/drawer'
import VwToolbarApp from '../../toolbars/app'

//
export default {
  components: {
    VwLayoutDrawer,
    VwToolbarApp,
  },
  data() {
    return {
      drawer: false,
    }
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