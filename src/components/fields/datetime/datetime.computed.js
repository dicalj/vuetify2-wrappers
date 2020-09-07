//
export default {

  /**
   * { function_description }
   *
   * @return     {Object}  { description_of_the_return_value }
   */
  _resetProps() {
    return {
      ...this.buttonProps,
      ...this.resetProps,
    }
  },

  /**
   * 
   */
  _rules() {
    return this.fieldProps ? this.fieldProps.rules ? this.fieldProps.rules : [] : []
  },

  /**
   * { function_description }
   *
   * @return     {Object}  { description_of_the_return_value }
   */
  _submitProps() {
    return {
      ...this.buttonProps,
      ...this.submitProps,
    }
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
      return this.value
    },

    /**
     * { property_description }
     *
     * @type       {<type>}
     */
    set(value) {
      this.$emit('input', value)
    },
  },

  /**
   * { function_description }
   *
   * @return     {string}  { description_of_the_return_value }
   */
  datetime() {

    const date = this.reverse ? this.date.split('-').reverse().join('-') : this.date
    const time = this.time
    
    return this.value === '' ? '' : `${date} ${time}`
  },

  /**
   * { function_description }
   *
   * @return     {boolean}  { description_of_the_return_value }
   */
  timer() {
    return false
  },

  /**
   * 
   */
  selectButtonProps() {
    return {
      color: this.readonly ? '' : 'primary',
      style: {
        marginTop: '-2px',
      }
    }
  },
}