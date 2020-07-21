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
   */
  getPropsLabel(prop) {

    // check field props label
    if (prop.fieldProps) {
      return prop.fieldProps.label
    }

    // check select props label
    if (prop.selectProps) {
      return prop.selectProps.label
    }

    // default
    return prop.label
  },

  /**
   * 
   */
  mapEditable(item) {

    // check prop
    if (item.prop) {
      return item.prop.readonly = !this.editable
    }

    // check prop field props
    if (item.prop && item.prop.fieldProps) {
      return item.prop.fieldProps.readonly = !this.editable
    }

    // check props
    if (item.props) {
      return item.props.readonly = !this.editable
    }

    // check props field props
    if (item.props && item.props.fieldProps) {
      return item.props.fieldProps.readonly = !this.editable
    }

    //
    return item
  },

  /**
   * 
   * @param {*} event 
   */
  mapHelp(item) {
    return {
      title: this.getPropsLabel(item.prop ? item.prop : item.props),
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
    this.$emit('reset', this._value)
  },

  /**
   * Handle submit form.
   */
  onClickSubmit() {
    this.validate().then(this.submit).catch(this.error)
  },

  /**
   * Reduces the slots.
   * 
   * @param   {Array}   slots - The slots
   * @param   {Object}  item - The item
   * @return  {Array}   the notches of items.
   */
  reduceSlots(slots, item) {
    return item.slots ? slots.concat(Object.values(item.slots)) : slots
  },

  /**
   * { function_description }
   * 
   * @param   {boolean}  [value=false]  The value
   */
  async setWait(value = false) {
    this.loading = value 
  },

  /**
   * 
   */
  submit() {
    this.$emit('click-submit', this._value)
    this.$emit('submit', this._value)
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

  see(notch) {
    console.log({ notch }, 'notch')
  },
}