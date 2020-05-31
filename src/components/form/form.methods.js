//
export default {

  /**
   * 
   */
  error() {
    this.$emit('error')
  },

  /**
   * 
   * @param {*} event 
   */
  mapHelp(item) {
    return {
      title: item.prop ? item.prop.label : item.props ? item.props.label : '',
      description: item.info,
    }
  },

  /**
   * Prevent the default event.
   * @param   {Object}  The event.
   */
  onSubmitForm(event) {
    event.preventDefault()
  },

  /**
   * 
   */
  onClickHelp() {
    this.dialogs.help = true
  },

  /**
   * Handle reset form.
   */
  onClickReset() {
    this.$emit('click-reset', this.value)
  },

  /**
   * Handle submit form.
   */
  onClickSubmit() {
    this.validate().then(this.submit).catch(this.error)
  },

  /**
   * Reduces the slots.
   * @param   {Array}   slots - The slots
   * @param   {Object}  item - The item
   * @return  {Array}   the notches of items.
   */
  reduceNotches(notches, item) {
    return item.slots ? Object.values(item.slots).concat(notches) : notches
  },

  /**
   * 
   */
  submit() {
    this.$emit('click-submit', this._value)
  },

  /**
   * 
   */
  async validate() {
    return this.$refs.form.validate() ? Promise.resolve() : Promise.reject()
  },

  /**
   * { function_description }
   * @param   {boolean}  [value=false]  The value
   */
  async wait(value = false) {
    this.loading = value 
  },
}