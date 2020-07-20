//
export default {
  computed: {

    /**
     * 
     */
    _autocompleteProps() {
      return {
        ...this.autocompleteProps,
        disabled: this.loading,
        items   : this.items,
        loading : this.loading,
      }
    },

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
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  data() {
    return {
      items: [],
      loading: false,
    }
  },
  methods: {

    /**
     * 
     */
    getParams() {
      return {
        limit: this.limit,
        sort: this.sort,
      }
    },

    /**
     * 
     */
    refresh() {
      Promise
        .resolve(true)
        .then(this.setBusy)
        .then(this.getParams)
        .then(this.fetch)
        .then(this.map)
        .then(this.setItems)
        .then(this.setBusy)
    },

    /**
     * 
     */
    setBusy(value = false) {
      this.loading = value
    },

    /**
     * 
     */
    setItems(items = []) {
      this.items = items
    },
  },
  props: {

    /**
     * 
     */
    autocompleteProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * 
     */
    fetch: {
      type: Function,
      default: async () => ({
        data: []
      }),
    },

    /**
     * 
     */
    limit: {
      type: Number,
      default: 5,
    },

    /**
     * 
     */
    map: {
      type: Function,
      default: res => res.data ? res.data : [],
    },

    /**
     * 
     */
    sort: {
      type: String,
      value: '-id',
    },

    /**
     * 
     */
    value: {
      type: String,
      default: '',
    }
  },
  mounted() {
    this.refresh()
  }
}