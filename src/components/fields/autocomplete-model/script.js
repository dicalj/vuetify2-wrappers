export default {
  name: 'currency-field',
  props: {

    /**
     *
     */
    noZero: {
      type: Boolean,
      default: true,
    },

    /**
     *
     */
    suffix: {
      type: String,
      default: '$',
    },

    /**
     *
     */
    value: {
      type: [String, Number],
      default: '',
    },

    /**
     *
     */
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {

    /**
     *
     */
    toProps() {
      return {
        ...this.$props,
        ...this.$attrs,
      }
    },

    /**
     *
     */
    _rules() {
      return this.rules.map(this.mapRules)
    },

    /**
     * @description
     */
    _value: {

      /**
       *
       */
      get() {
        return this.format(this.value)
      },

      /**
       *
       */
      set(val) {
        this.$emit('input', this.deform(val))
      },
    },
  },
  methods: {

    /**
     *
     */
    deform(val) {
      // cast val to number
      let valString = val.toString()
      let valSplitted = valString.split(',')
      let valBody = valSplitted.slice().shift().split('.').join('')
      let valLast = valSplitted.slice().pop()
      let valAggregate = valSplitted.length > 1 ? String('.').concat(String(valLast)) : ''
      let valParsed = String(valBody).concat(String(valAggregate))

      // return a String or Number
      return isNaN(valParsed) ? String(valParsed) : Number(valParsed)
    },

    /**
     * @description
     */
    format(val) {
      // return if has only negative symbol
      if (this.hasOnlyNegativeSymbol(val)) return '-'

      // return if no val
      if (this.hasNotVal(val)) return ''

      // cast val to string number representation
      let valString = Number(val||'').toString()
      let valSplitted = String(valString).split('.')
      let valBody = valSplitted.slice().shift().split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')
      let valLast = valSplitted.slice().pop()
      let valAggregate = valSplitted.length > 1 ? String(',').concat(String(valLast)) : ''
      let valParsed = String(valBody).concat(String(valAggregate))

      // return a String
      return String(valParsed)
    },

    /**
     * @description
     */
    hasNotVal(val) {
      return val === ''
    },

    /**
     * @description
     */
    hasOnlyNegativeSymbol(val) {
      return val.toString() === '-'
    },

    /**
     * @description
     */
    handleDot(event) {
      //
      const hasComma = this._value.includes(',')
      const wasComma = event.key === ','
      const wasPoint = event.key === '.'
      const requiredStop = ( hasComma && wasComma ) || wasPoint
      //
      if ( requiredStop ) {
          event.preventDefault()
          event.stopPropagation()
      }
    },

    /**
     *
     */
    mapRules(f) {
      return f(this.value)
    },

    /**
     * @description
     */
    reformat(val) {
      this._value = this.format(val)
    },

    /**
     * @description
     */
    reset() {
      this._value = ''
    },

  },
  watch: {

    /**
     *
     */
    value(next, prev) {
      //
      const noNumber = isNaN(next)
      const noNegativeSymbol = String(next) !== '-'
      const requireReset = noNumber && noNegativeSymbol
      //
      if (requireReset) {
        this.$nextTick(() => {
          this.reset()
          this.$nextTick(()=> {
            return this.reformat(prev)
          })
        })
      }
    },
  },
}