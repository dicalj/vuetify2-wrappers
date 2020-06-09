//
export default {
  props: {

    /**
     * The v-col props.
     */
    cardProps: {
      type: Object,
      default: () => ({
        class: 'ma-5 pa-5',
        flat: true,
      })
    },

    /**
     * The v-card-subtitle text.
     */
    subtitle: {
      type: String,
      default: 'No podemos encontrar la ruta ingresada.',
    },

    /**
     * The v-card-subtitle props.
     */
    subtitleProps: {
      type: Object,
      default: () => ({})
    },

    /**
     * The v-card-text props.
     */
    textProps: {
      type: Object,
      default: () => ({})
    },

    /**
     * The v-card-title text.
     */
    title: {
      type: String,
      default: 'Hmm. Estamos teniendo problemas para encontrar esta pagina.',
    },

    /**
     * The v-card-title props.
     */
    titleProps: {
      type: Object,
      default: () => ({})
    },
  },
}