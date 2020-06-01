//
export default {

  /**
   * The filters array.
   */
  filters: {
    type: Array,
    default: () => [],
  },

  /**
   * The filter props.
   */
  filterProps: {
    type: Object,
    default: () => ({}),
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
   * Hide menu flag
   */
  noMenu: {
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
   * The service function.
   */
  service: {
    type: Function,
    default: () => ({
      data: [],
      length: 0,
    })
  },
}
