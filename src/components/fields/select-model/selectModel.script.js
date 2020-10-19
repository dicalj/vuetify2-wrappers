//
export default {
  computed: {

    /**
     * 
     */
    first() {
      return this.items.slice().shift()
    },

    /**
     * 
     */
    firstValue() {
      return this.first ? this.first[this.selectPropsItemValue] : ''
    },

    /**
     * 
     */
    selectPropsItemValue() {
      return this.selectProps && this.selectProps.itemValue ? this.selectProps.itemValue : 'value'
    },

    /**
     * 
     */
    _selectProps() {
      return {
        ...this.selectProps,
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

      //
      this.items = items

      //
      if (this.autoSelectFirst && this.items.length && this._value === '') {
        this._value = this.firstValue
      }
    },
  },
  props: {

    /**
     * 
     */
    autoSelectFirst: {
      type: Boolean,
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
    selectProps: {
      type: Object,
      default: () => ({}),
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
      type: [Number, String],
      default: '',
    }
  },
  mounted() {
    this.refresh()
  }
}