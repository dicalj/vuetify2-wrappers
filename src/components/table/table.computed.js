// the table computed component
export default {

  /**
   * The merge filter button props with the props & data provided by
   * the parent table component.
   */
  _filterButtonProps() {
    return {
      ...this.filterButtonProps,
      color: this.filterButtonColor
    }
  },

  /**
   * The merge filter form props with the props & data provided by
   * the parent table component.
   */
  _filterFormProps() {
    return {
      ...this.filterProps,
      items     : this.filters,
      noHelp    : true,
      noMenu    : true,
      submitText: 'filtrar',
      textProps : { class: 'px-4 py-0' },
      title     : 'Filtros',
    }
  },

  /**
   * 
   */
  filterButtonColor() {
    return this.filterShow ? this.filterButtonActiveColor : this.filterButtonProps.color
  },

  /**
   * 
   */
  filterDataLength() {
    return Object.values(this.filter.data).filter(this.filterByEmpty).length
  },

  /**
   * 
   */
  filterShow() {
    return Boolean(this.filter.show)
  },

  /**
   * 
   */
  footerProps() {
    return {
      itemsPerPageOptions: this.itemsPerPage,
    }
  },

  /**
   * 
   */
  headersToCustom() {
    return this.headers.filter(this.filterByCustom).map(this.mapToCustom)
  },

  /**
   * 
   */
  headersToRender() {
    return this.noActions ? this.headers : this.headers.concat([ this.lastProps ])
  },

  /**
   * 
   */
  lastProps() {
    return {
      align : 'right',
      class : 'px-6',
      text  : 'Acciones',
      value : 'actions',
      width : '10%',
      ...this.actionsProps,
    }
  },

  /**
   * 
   */
  params() {
    return {
      filter  : this.mapFilter(this.filter.data),
      headers : this.headers,
      limit   : this.options.itemsPerPage,
      offset  : this.options.page,
      search  : this.search,
      sortBy  : this.options.sortBy,
      sortDesc: this.options.sortDesc,
    }
  },

  /**
   * 
   */
  _refreshButtonProps() {
    return {
      ...this.refreshButtonProps,
    }
  },

  /**
   * { item_description }
   */
  showFilter() {
    return !this.noFilter
  },

  /**
   * { item_description }
   */
  showRefresh() {
    return !this.noRefresh
  },

  /**
   * { item_description }
   */
  showSearch() {
    return !this.noSearch
  },

  /**
   * { item_description }
   */
  showToolbar() {
    return !this.noToolbar
  },

  /**
   * 
   */
  tableProps() {
    return {
      dense             : true,
      disabled          : this.busy,
      footerProps       : this.footerProps,
      headers           : this.headersToRender.map(this.mapSortable),
      itemKey           : this.itemKey,
      items             : this.table.items,
      loading           : this.busy,
      serverItemsLength : this.table.length,
      showSelect        : this.showSelect,
    }
  },

  /**
   * 
   */
  toolbarProps() {
    return {
      color : 'primary',
      dark  : true,
      dense : true,
      flat  : true,
      noMenu: this.noMenu,  
      title : this.title,        
    }
  },
}
