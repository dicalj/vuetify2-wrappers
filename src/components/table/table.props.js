//
export default {

  /**
   * 
   */
  actionsProps: {
    type: Object,
    default: () => ({}),
  },

  /**
   * 
   */
  exportName: {
    type: String,
    default: 'export',
  },

  /**
   * 
   */
  exportTitle: {
    type: String,
    default: 'export',
  },

  /**
   * 
   */
  exportType: {
    type: String,
    default: 'xlsx',
  },

  /**
   * The filters array.
   */
  filters: {
    type: Array,
    default: () => [],
  },

  /**
   * The filter button active color.
   */
  filterButtonActiveColor: {
    type: String,
    default: 'accent',
  },

  /**
   * The filter button props.
   */
  filterButtonProps: {
    type: Object,
    default: () => ({
      bottom: true,
      dark  : true,
      icon  : true,
      tip   : 'Filtrar',
    }),
  },

  /**
   * 
   */
  filterData: {
    type: Object,
    default: () => ({
      
    })
  },

  /**
   * The filter props.
   */
  filterProps: {
    type: Object,
    default: () => ({
      buttonsProps: {
        small: true,
      },
      cardProps: {
        elevation: 0,
        tile: true,
      },
    }),
  },

  /**
   * The headers array.
   */
  headers: {
    type: Array,
    default: () => [],
  },

  /**
   * The items array.
   */
  itemKey: {
    type: String,
    default: 'id',
  },

  /**
   * The items array.
   */
  items: {
    type: Array,
    default: () => [],
  },

  /**
   * The items per page options.
   */
  itemsPerPage: {
    type: Array,
    default: () => [ 15, 25, 50, 100 ],
  },

  /**
   * The map filter function.
   */
  mapFilter: {
    type: Function,
    default: data => data,
  },

  /**
   * The map items function.
   */
  mapItems: {
    type: Function,
    default: data => data,
  },

  /**
   * The map params function.
   */
  mapParams: {
    type: Function,
    default: data => data,
  },

  /**
   * Hide actions flag
   */
  noActions: {
    type: Boolean,
    default: false,
  },

  /**
   * Hide filters flag
   */
  noFilter: {
    type: Boolean,
    default: false,
  },

  /**
   * Hide menu flag
   */
  noMenu: {
    type: Boolean,
    default: false,
  },

  /**
   * Hide refresh flag
   */
  noRefresh: {
    type: Boolean,
    default: false,
  },

  /**
   * Hide toolbar search flag.
   */
  noSearch: {
    type: Boolean,
    default: false,
  },

  /**
   * Hide toolbar flag
   */
  noToolbar: {
    type: Boolean,
    default: false,
  },

  /**
   * The filter button props.
   */
  refreshButtonProps: {
    type: Object,
    default: () => ({
      bottom: true,
      dark  : true,
      icon  : true,
      tip   : 'Refrescar',
    }),
  },

  /**
   * 
   */
  resLength: {
    type: String,
    default: 'length',
  },

  /**
   * 
   */
  resItems: {
    type: String,
    default: 'items',
  },

  /**
   * 
   */
  showSelect: {
    type: Boolean,
    default: true,
  },

  /**
   * 
   */
  singleSelect: {
    type: Boolean,
    default: false,
  },

  /**
   * The service function.
   */
  service: {
    type: Function,
    default: () => ({
      data: [],
      length: 0,
    })
  },

  /**
   * 
   */
  title: {
    type: String,
  },
}
