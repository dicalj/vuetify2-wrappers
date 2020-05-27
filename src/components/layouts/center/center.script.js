//
export default {
  props: {

    /**
     * The v-col props.
     */
    colProps: {
      type: Object,
      default: () => ({
        cols: '4',
      })
    },

    /**
     * The v-container props.
     */
    containerProps: {
      type: Object,
      default: () => ({
        class: 'fill-height pa-0',
        fluid: true,
      })
    },

    /**
     * The v-row props.
     */
    rowProps: {
      type: Object,
      default: () => ({
        align: 'center',
        justify: 'center',
        wrap: true,
      })
    },
  },
}