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
    title: {
      type: String,
    },
  },
}