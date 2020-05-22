//
export default {

  /**
   * Get the standardized items-props.
   *
   * @return  {Array} standardized items.
   */
  elements() {
    return this.items.map(this.standardize)
  },

  /**
   * The computed value to v-model in fieldset.
   */
  _value: {

    /**
     * Returns the input value.
     *
     * @type  {Object} the value.
     */
    get() {
      return this.value
    },

    /**
     * Set the input value.
     *
     * @params  {Object} value - the input value.
     */
    set(value) {
      this.value = value
    }
  }
}