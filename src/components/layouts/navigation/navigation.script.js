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
    items: {
      type: Array,
    },

    /**
     * 
     */
    source: {
      type: String,
    },

    /**
     * 
     */
    subtitle: {
      type: String,
    },

    /**
     * 
     */
    title: {
      type: String,
    },
  },
}