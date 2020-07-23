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
  data() {
    return {
      ready: false,
    }
  },
  methods: {

    /**
     * 
     */
    init() {
      this.items.forEach((item, i) => {
        this._value[i] = []
      })
      
      this.ready = true
    },
  },
  props: {
    
    /**
     * 
     */
    checkboxProps: {
      type: Object,
      default: () => ({}),
    },

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