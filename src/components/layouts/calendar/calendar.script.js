//
import VwBtn from '../../buttons/button'

//
export default {
  components: {
    VwBtn,
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {

    /**
     * 
     */
    onClickNext() {
      this.$refs.calendar.next()
    },

    /**
     * 
     */
    onClickPrev() {
      this.$refs.calendar.prev()
    },
  },
  props: {

    /**
     * 
     */
    calendarProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    itemsProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    paginationProps: {
      type: Object,
      default: () => ({}),
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
      default: () => ({}),
    },

    /**
     * 
     */
    toolbarProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    sheetProps: {
      type: Object,
      default: () => ({}),
    },
  }
}