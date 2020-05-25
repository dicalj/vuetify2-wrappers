export default {
  computed: {

    /**
     * { function_description }
     *
     * @return     {Object}  { description_of_the_return_value }
     */
    _button() {
      return {
        color : this._color,
        icon  : true,
        text  : true,
        ...this.buttonProps,
      }
    },

    /**
     * { function_description }
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    _color() {
      return this.show ? this.showColor : ''
    },

    /**
     * { function_description }
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    _type() {
      return this.show ? 'text' : 'password'
    },

    /**
     * { function_description }
     *
     * @return     {Object}  { description_of_the_return_value }
     */
    _field() {
      return { 
        rules: [],
        ...this.fieldProps, 
      }
    },

    /**
     * { function_description }
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    _rules() {
      return this._field.rules.filter(this.filterRule).map(this.mapRule)
    },

    /**
     * { item_description }
     */
    _value: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit('input', value)
      },
    }
  },
  data() {
    return {
      show: 0,
    }
  },
  methods: {

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
     * @param      {Function}  f       { parameter_description }
     * @return     {<type>}    { description_of_the_return_value }
     */
    mapRule(f) {
      return f(this.value)
    },
  },
  props: {

    /**
     * @description
     * { item_description }
     */
    buttonProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * @description
     * { item_description }
     */
    fieldProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * @description
     * { item_description }
     */
    showColor: {
      type: String,
      default: 'primary'
    },

    /**
     * @description
     * { item_description }
     */
    showIcon: {
      type: String,
      default: 'mdi-eye'
    },

    /**
     * @description
     * { item_description }
     */
    value: {
      type: String,
      default: '',
    }
  }
}