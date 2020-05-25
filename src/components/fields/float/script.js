export default {
  name: 'float-field',
  props: {

    /**
     * Max input value.
     */
    max: Number,

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
      let valSplited = valString.split(',')
      let valBody = valSplited.slice().shift()
      let valLast = valSplited.slice().pop()
      let valAggregate = valSplited.length > 1 ? String('.').concat(String(valLast)) : ''
      let valParsed = String(valBody).concat(String(valAggregate))

      //
      //console.log({ valParsed: isNaN(valParsed) ? String(valParsed) : Number(valParsed) }, isNaN(valParsed))

      // return a String or Number
      return isNaN(valParsed) ? String(valParsed) : Number(valParsed)
    },

    /**
     * @description
     */
    format(val) {
      // return if has only negative symbol
      if (this.hasOnlyNegativeSimbol(val)) return '-'

      // return if no val
      if (this.hasNotVal(val)) return ''

      // cast val to string number representation
      let valString = Number(val||'').toString()
      let valSplited = valString.split('.')
      let valBody = valSplited.slice().shift()
      let valLast = valSplited.slice().pop()
      let valAggregate = valSplited.length > 1 ? String(',').concat(String(valLast)) : ''
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
    hasOnlyNegativeSimbol(val) {
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
    value(curr, prev) {

      //
      const noNumber = isNaN(curr)
      const noNegativeSymbol = String(curr) !== '-'
      const requireReset = noNumber && noNegativeSymbol
      const isMax = this.max && this.max < curr

      //
      if (requireReset || isMax) {
        this.$nextTick(() => {
          this.reset()
          this.$nextTick(()=> {
            this.reformat(prev)
          })
        })
      }
    },
  },
}