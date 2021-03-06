//
export default {

  /**
   *
   */
  actionsProps: {
    type: Object,
    default: () => ({
      class: 'grey darken-4 justify-space-between',
    }),
  },

  /**
   *
   */
  buttonsProps: {
    type: Object,
    default: () => ({
      text: true,
    }),
  },

  /**
   *
   */
  cardProps: {
    type: Object,
    default: () => ({}),
  },

  /**
   * { item_description }
   */
  contentClass: String,

  /**
   *
   */
  dialogCardProps: {
    type: Object,
    default: () => ({}),
  },

  /**
   * { item_description }
   */
  dialogCardSubtitle: {
    type: String,
    default: 'Subtitulo',
  },

  /**
   *
   */
  dialogProps: {
    type: Object,
    default: () => ({
      width: 650,
    }),
  },

  /**
   * { item_description }
   */
  editable: {
    type: Boolean,
    default: true,
  },

  /**
   *
   */
  formProps: {
    type: Object,
    default: () => ({}),
  },

  /**
   * 
   */
  helpIcon: {
    type: String,
    default: 'mdi-information',
  },

  /**
   * 
   */
  helpItems: {
    type: Array,
    default: () => [
      {
        title: 'Titulo',
        description: 'Descripción',
      }
    ],
  },

  /**
   * { item_description }
   */
  infoTitle: {
    type: String,
    default: 'Titulo',
  },

  /**
   * { item_description }
   */
  items: {
    type: Array,
    default: () => [],
  },

  /**
   * 
   */
  loadingColor: {
    type: String,
    default: 'primary',
  },

  /**
   * { item_description }
   */
  noActions: Boolean,

  /**
   * 
   */
  noHelp: Boolean,
  
  /**
   * 
   */
  noMenu: Boolean,

  /**
   * 
   */
  noReset: {
    type: Boolean,
    default: false,
  },

  /**
   * 
   */
  noSubmit: {
    type: Boolean,
    default: false,
  },

  /**
   * 
   */
  noSwitch: Boolean,

  /**
   * 
   */
  noToolbar: Boolean,

  /**
   * { item_description }
   */
  options: {
    type: Array,
    default: () => [],
  },

  /**
   * 
   */
  primaryType: {
    type: String,
    default: 'button',
  },

  /**
   * { item_description }
   */
  resetButtonProps: {
    type: Object,
    default: () => ({
      color: 'white',
    }),
  },

  /**
   *
   */
  resetText: {
    type: String,
    default: 'limpiar',
  },

  /**
   *
   */
  submitButtonProps: {
    type: Object,
    default: () => ({
      color: 'primary',
      type: 'submit',
    }),
  },

  /**
   *
   */
  submitText: {
    type: String,
    default: 'enviar',
  },

  /**
   *
   */
  switchProps: {
    type: Object,
    default: () => ({}),
  },

  /**
   *
   */
  switchText: {
    type: String,
    default: 'Habilitar edición',
  },

  /**
   * { item_description }
   */
  textProps: {
    type: Object,
    default: () => ({
      class: 'grey lighten-4',
    }),
  },

  /**
   * Form title
   */
  title: {
    type: String,
    default: 'TITLE',
  },

  /**
   * { item_description }
   */
  titleProps: {
    type: Object,
    default: () => ({
      class: 'subtitle-2',
    }),
  },

  /**
   * { item_description }
   */
  toolbarProps: {
    type: Object,
    default: () => ({
      dark: true,
      dense: true,
      flat: true,
    }),
  },

  /**
   *
   */
  value: {
    type: Object,
    default: () => ({}),
  },
}