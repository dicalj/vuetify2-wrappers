//
export default function data() {
  return {

    /**
     * The busy state.
     */
    busy: false,

    /**
     * The filter options.
     */
    filter: {
      data: {},
      show: false,
    },

    /**
     * The table options
     */
    options: {
      itemsPerPage: 15,
      page: 1,
      sortBy: [],
    },

    /**
     * The search value.
     */
    search : '',

    /**
     * The selected items.
     */
    selected: [],

    /**
     * The table data.
     */
    table: {
      items: [],
    },

    /**
     * The server data.
     */
    server: {
      length: 0,
    },
  }
}