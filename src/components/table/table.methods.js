//
export default {

  /**
   * 
   */
  clean() {
    this.filter.data = {}
  },

  /**
   * Get the items from a service function provided by props.
   * 
   * @return {Promise} the fetch service.
   */
  fetch() {
    return Promise.resolve(this.params).then(this.mapParams).then(this.service)
  },

  /**
   * 
   */
  filterByCustom(header) {
    return (
      typeof header.component === 'string' ||
      typeof header.format === 'function' 
    )
  },

  /**
   * 
   */
  filterByEmpty(prop) {
    return prop != ""
  },

  /**
   * Get the mapped params selected.
   * 
   * @return {Promise} the params
   */
  getParams() {
    return this.mapParams(this.params)
  },

  /**
   * 
   */
  getSelected() {
    return this.selected
  },

  /**
   * 
   */
  mapSortable(header) {
    return {
      ...header,
      sortable: !!header.sortable,
    }
  },

  /**
   * 
   */
  mapToCustom(header) {
    return {
      ...header,
      slot: `item.${ header.value }`,
    }
  },

  /**
   * { function_description }
   */
  refresh() {
    if (!this.busy) {
      this.busy = true;
      this.fetch().then(this.setter).catch(this.setError).then(this.setBusy)
    }
  },

  /**
   * { item_description }
   */
  setter(res) {
    return Promise.resolve(res).then(this.mapItems).then(this.setItems)
  },

  /**
   * Show the error in console
   */
  setError(error) {
    console.error({ error })
  },

  /**
   * Set the items and length of the v-data-table from the response
   * of service after the apply the mapItems function.
   * 
   * @param {Object} res - the service response.
   */
  setItems(res) {

    // verify if the response has items nad length
    const hasItems  = !! res[this.resItems]
    const hasLength = !! res[this.resLength]

    // set the items from the response
    if (hasItems) {
      this.table.items = res[this.resItems]
    }

    // set the length from the response
    if (hasLength) {
      this.table.length = res[this.resLength]
    }
  },

  /**
   * Called when clicked the filter button of toolbar.
   */
  onClickFilter() {
    this.filter.show = !this.filter.show
  },

  /**
   * Called when clicked the refresh button of toolbar.
   */
  onClickRefresh() {
    this.refresh()
  },

  /**
   * Called on reset filter.
   */
  onResetFilter() {
    this.clean()
    this.refresh()
  },

  /**
   * Called when clicked the remove button of search field.
   */
  onResetSearch() {
    this.search = ''    
  },

  /**
   * Called when clicked the select all button.
   */
  onSelectAll(event) {
    this.$emit('toggle-select-all', event)    
  },

  /**
   * Called when clicked the select item button.
   */
  onSelectItem(event) {
    this.$emit('item-selected', event)
  },

  /**
   * Called when clicked the filter button.
   */
  onSubmitFilter() {
    this.refresh()
  },

  /**
   * Called when clicked the search button of search field.
   */
  onSubmitSearch() {
    this.options.page = 1
    this.refresh()
  },

  /**
   * Called when updated the options of table.
   */
  onUpdateOptions() {
    this.refresh()
  },

  /**
   * Sets the busy.
   *
   * @param {boolean} [value=false] - The value.
   */
  setBusy(value = false) {
    this.busy = value
  },
}
