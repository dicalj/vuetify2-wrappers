//
export default {

  /**
   * 
   */
  filterButtonProps() {
    return {
      bottom: true,
      dark  : true,
      icon  : true,
      tip   : 'Filtrar',
    }
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
  filterFormProps() {
    return {      
      items     : this.filters,    
      noItemText: 'Sin filtros.',
      noMenu    : true,
      submitText: 'filtrar',
      textProps : { class: 'px-4 py-0' },
      title     : 'Filtros',
    }
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
  refreshButtonProps() {
    return {
      bottom: true,
      dark  : true,
      icon  : true,
      tip   : 'Filtrar',
    }
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
      headers           : this.headersToRender.map(this.mapSortable),
      itemKey           : 'id',
      items             : this.table.items,
      loading           : this.busy,
      serverItemsLength : this.length,
      showSelect        : true,
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
    }
  },
}
