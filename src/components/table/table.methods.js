//
export default {

  /**
   * 
   */
  clean() {
    this.filter.data = {}
  },

  /**
   * { item_description }
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
   * Get the mapped params selecteds.
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
      Promise
        .resolve(true)
        .then(this.setBusy)
        .then(this.fetch)
        .then(this.setter)
        .catch(this.setError)
        .then(this.setBusy)
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
   * 
   */
  setItems(res) {
    this.table.length = res.total
    this.table.items = res.data
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
