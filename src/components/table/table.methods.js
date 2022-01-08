//
import xlsx from 'xlsx'

//
export default {

  /**
   * 
   */
  clean() {
    this.filter.data = this.filterData
  },

  /**
   * Get the items from a service function provided by props.
   * 
   * @return {Promise} the fetch service.
   */
  fetch() {
    const filter = this.mapFilter(this.filter.data)
    const params = {
      ...this.params,
      filter,
    }
    return Promise.resolve(params).then(this.mapParams).then(this.service)
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
    return prop !== '' && prop !== null
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
  mapColumn(item) {
    return item.text
  },

  /**
   * 
   */
  mapRow(item) {
    return this.headers.reduce(this.reduceRow(item), {})
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
   * 
   */
  reduceRow: (item) => (row, header) => {

    //
    const itemValue = item[header.value]

    //
    return {
      ...row,
      [header.text]: header.format ? header.format(itemValue) : itemValue
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
   * 
   */
  async onExport() {

    //
    console.log('exporting')

    // required data
    const exportTotal = this.table.length
    const exportLimit = Math.min(1250, exportTotal)
    const exportPages = Math.ceil(exportTotal / exportLimit)
    // const exportCount = 0

    // required params
    const exportTitle = `${ this.exportTitle }`
    const exportFile  = `${ this.exportName }.${ this.exportType }`

    // initialize print data
    this.print.columns = this.headers.map(this.mapColumn)
    this.print.rows = []

    // fetch rows
    for (let page = 1; page <= exportPages; page++) {
      await this.fetch().then(this.setRows)
    }

    // preparate xlsx book
    const book  = xlsx.utils.book_new()
    const sheet = xlsx.utils.json_to_sheet(this.print.rows, {
      header: this.print.columns,
    })

    // write book
    xlsx.utils.book_append_sheet(book, sheet, exportTitle)
    xlsx.writeFile(book, exportFile)
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
    if (this.already) {
      this.refresh()
    }
  },

  /**
   * 
   */
  ready() {
    this.already = true
  },

  /**
   * Sets the busy.
   * @param {boolean} [value=false] - The value.
   */
  setBusy(value = false) {
    this.busy = value
  },

  /**
   * Set new rows in print data.
   * @param {object} res - the fetch response.
   */
  setRows(res) {

    //
    const data = res.data || []
    const rows = data.map(this.mapRow)

    //
    this.print.rows = this.print.rows.concat(rows)
  },
}
