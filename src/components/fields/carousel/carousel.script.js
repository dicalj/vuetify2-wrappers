//
export default {
  computed: {

    /**
     * 
     */
    items() {
      return this.value
    }
  },
  props: {

    /**
     * 
     */
    carouselProps: {
      type: Object,
    },

    /**
     * 
     */
    imageProps: {
      type: Object,
    },

    /**
     * 
     */
    itemProps: {
      type: Object,
    },

    /**
     * 
     */
    itemSrc: {
      type: String,
    },

    /**
     * 
     */
    value: {
      type: Array,
    },
  }
}