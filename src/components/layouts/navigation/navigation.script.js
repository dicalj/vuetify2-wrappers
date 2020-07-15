//
import VwToolbarApp from '../../toolbars/app'

//
export default {
  components: {
    VwToolbarApp,
  },
  methods: {

    /**
     * 
     */
    onItem(event) {
      this.$router.push(event.item[this.itemLink])
    },
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
    itemLink: {
      type: String,
      default: 'link',
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
    subtitleProps: {
      type: Object,
      default: () => ({
        class: 'text-capitalize',
      }),
    },

    /**
     * 
     */
    title: {
      type: String,
    },
  },
}