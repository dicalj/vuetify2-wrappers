//
export default {

  /**
   * Define the v-card-actions component props.
   * @returns {Object} component props.
   */
  _actionsProps() {
    return { 
      ...this.actionsProps,
    }
  },

  /**
   * Define the v-btn component props.
   * @returns {Object} component props.
   */
  _buttonsProps() {
    return { 
      disabled: this.loading,
      ...this.buttonsProps,
    }
  },

  /**
   * Define the v-card component props.
   * @returns {Object} component props.
   */
  _cardProps() {
    return {
      ...this.cardProps,
      class   : this.contentClass,
      loading : this.loading ? this.loadingColor : false,
    }
  },

  /**
   * Define the v-card-text component props.
   * @returns {Object} component props.
   */
  _cardTextProps() {
    return {
      
    }
  },

  /**
   * Define the v-form component props.
   * @returns {Object} component props.
   */
  _formProps() {
    return { 
      ...this.formProps,
    }
  },

  /**
   * Define the v-btn reset component props.
   * @returns {Object} component props.
   */
  _resetButtonProps() {
    return { 
      ...this._buttonsProps,
      ...this.resetButtonProps,
    }
  },

  /**
   * Define the v-btn submit component props.
   * @returns {Object} component props.
   */
  _submitButtonProps() {
    return { 
      ...this._buttonsProps,
      ...this.submitButtonProps,
    }
  },

  /**
   * Define the w-toolbar-props component props.
   * @returns {Object} component props.
   */
  _toolbarProps() {
    return { 
      noMenu: this.noMenu,
      title: this.title,
      titleProps: {
        ...this.titleProps,
      },
      toolbarProps: {
        ...this.toolbarProps,
      },
    }
  },

  /**
   * { function_description }
   * @return     {Object}  { description_of_the_return_value }
   */
  fieldsetProps() {
    return {
      disabled: this.loading,
      items: this.items,
    }
  },

  /**
   * 
   */
  helps() {
    return this.items.map(this.mapHelp)
  },

  /**
   * { function_description }
   * @return     {<type>}  { description_of_the_return_value }
   */
  itemsSlots() {
    return this.items.reduce(this.reduceSlots, [])
  },

  /**
   * Determine if show the actions form.
   * @returns {Boolean} boolean flag.
   */
  showActions() {
    return !this.noActions
  },

  /**
   * Determine if show the reset button.
   * @returns {Boolean} boolean flag.
   */
  showReset() {
    return !this.noReset
  },

  /**
   * Determine if show the submit button.
   * @returns {Boolean} boolean flag.
   */
  showSubmit() {
    return !this.noSubmit
  },

  /**
   * Determine if show the toolbar form.
   * @returns {Boolean} boolean flag.
   */
  showToolbar() {
    return !this.noToolbar
  },

  /**
   * 
   */
  _value: {
    get() {
      return this.value
    },
    set(val) {
      this.value = val
    }
  }
}