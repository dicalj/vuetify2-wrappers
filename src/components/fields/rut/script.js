export default {
  computed: {

    /**
     * { function_description }
     *
     * @return     {Object}  { description_of_the_return_value }
     */
    _field() {
      return { 
        ...this.fieldProps, 
      }
    },

    /**
     * { function_description }
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    _rules() {
      return this.fieldProps.rules ? this.fieldProps.rules.filter(this.filterRule).map(this.mapRule) : []
    },

    /**
     * { item_description }
     */
    _value: {

      /**
       * { property_description }
       *
       * @type       {<type>}
       */
      get() {
        return this.format(this.value)
      },

      /**
       * { property_description }
       *
       * @type       {<type>}
       */
      set(value) {
        this.$emit('input', this.deform(value))
      },
    }
  },
  methods: {

    /**
     * { function_description }
     *
     * @param      {string}  value   The value
     * @return     {string}  { description_of_the_return_value }
     */
    clean(value) {
      return value
        .toString()
        .replace(/\./g, '')
        .replace(/-/g, '')
    },

    /**
     * { function_description }
     *
     * @param      {Array}   value     The value
     * @return     {string}  { description_of_the_return_value }
     */
    format(value) {

      //
      let full = this.clean(value)
      let body = full.split('').slice(0, -1).join('')
      let last = full.split('').slice(-1).join('')

      //
      body = body
        .replace(/\D/g, '')
        .split('')
        .reverse()
        .reduce( (t, c, i) => t + ( i%3 || i === 0 ? c : '.' + c), '')
        .split('')
        .reverse()
        .join('')

      //
      return `${body}${body.length ? '-' : ''}${last}`
    },

    /**
     * { function_description }
     *
     * @param      {Array}  value     The value
     * @return     {Array}  { description_of_the_return_value }
     */
    deform(value) {

      //
      let full = this.clean(value)
      let body = full.split('').slice(0, -1).join('')
      let last = full.split('').slice(-1).join('')

      //
      return `${body}${body.length ? '-' : ''}${last}`
    },

    /**
     * { function_description }
     *
     * @param      {<type>}  f       { parameter_description }
     * @return     {<type>}  { description_of_the_return_value }
     */
    filterRule(f) {
      return typeof f === 'function'
    },

    /**
     * { function_description }
     *
     * @param      {<type>}  e       { parameter_description }
     * @return     {<type>}  { description_of_the_return_value }
     */
    handleKeyDown(e) {
      if (e.ctrlKey && e.key === 'v') {
        return
      }
      if (e.key.length === 1 && this.value.includes('k') && e.key === 'k') {
        this.handlePreventPropagation(e)
        return
      }
      if (e.key.length === 1 && (isNaN(e.key) && e.key !== 'k')) {
        this.handlePreventPropagation(e)
        return
      }
    },

    /**
     * { function_description }
     *
     * @param      {<type>}  event   The event
     */
    handlePreventPropagation(event) {
      event.preventDefault()
      event.stopPropagation()
    },

    /**
     * { function_description }
     *
     * @param      {Function}  f       { parameter_description }
     * @return     {<type>}    { description_of_the_return_value }
     */
    mapRule(f) {
      return f(this.value)
    },
  },
  props: {

    /**
     * { item_description }
     */
    fieldProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * { item_description }
     */
    value: {
      type: [Number, String],
      default: '',
    }
  }
}