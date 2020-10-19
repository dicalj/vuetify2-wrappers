//
export default function data() {
  return {

    /**
     * The mounted flag
     */
    already: false,

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
     * The print data
     */
    print: {
      columns: [],
      rows: [],
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
      length: 0,
    },

    /**
     * The server data.
     */
    server: {
      length: 0,
    },
  }
}