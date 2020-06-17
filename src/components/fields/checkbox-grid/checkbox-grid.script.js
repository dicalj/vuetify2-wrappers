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
      this.items.forEach((item, i) => {
        this._value[i] = []
      })
      this.headers.forEach((header, j) => {
        this.items.forEach((item, i) => {
          this._value[i][j] = false
        })
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