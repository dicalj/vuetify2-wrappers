//
export default {
  computed: {

    /**
     * 
     */
    _value: {

      /**
       * 
       */
      get() {
        return this.value
      },

      /**
       * 
       */
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {

    /**
     * 
     */
    init() {
      this.headers.forEach(header => {
        this._value.push('')
      })
    },
  },
  props: {

    /**
     * 
     */
    headers: {
      type: Array,
      default: () => [],
    },

    /**
     * 
     */
    headerText: {
      type: String,
      default: 'text',
    },

    /**
     * 
     */
    headerValue: {
      type: String,
      default: 'value',
    },

    /**
     * 
     */
    items: {
      type: Array,
      default: () => [],
    },

    /**
     * 
     */
    itemText: {
      type: String,
      default: 'text',
    },

    /**
     * 
     */
    itemValue: {
      type: String,
      default: 'value',
    },
    
    /**
     * 
     */
    radioGroupProps: {
      type: Object,
      default: () => ({}),
    },
    
    /**
     * 
     */
    radioProps: {
      type: Object,
      default: () => ({}),
    },
    
    /**
     * 
     */
    tableProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    value: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.init()
  },
}