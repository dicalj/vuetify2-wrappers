//
const DEFAULT_DATE = '2020-01-01'
const DEFAULT_DATE_ICON = 'mdi-calendar'
const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd'
const DEFAULT_TIME = '00:00:00'
const DEFAULT_TIME_ICON = 'mdi-clock'
const DEFAULT_TIME_FORMAT = 'HH:mm:ss'
const DEFAULT_DIALOG_WIDTH = 340
const DEFAULT_CLEAR_TEXT = 'cancelar'
const DEFAULT_OK_TEXT = 'aceptar'

//
export default {

  /**
   * The button properties.
   */
  buttonProps: {
    type: Object,
    default: () => ({
      text: true,
    }),
  },

  /**
   * The card properties.
   */
  cardProps: {
    type: Object,
  },

  /**
   * The dialog properties.
   */
  dialogProps: {
    type: Object,
    default: () => ({
      width: DEFAULT_DIALOG_WIDTH,
    }),
  },

  /**
   * The tab date icon.
   */
  dateIcon: {
    type: String,
    default: DEFAULT_DATE_ICON,
  },

  /**
   * the datetime date format.
   */
  dateFormat: {
    type: String,
    default: DEFAULT_DATE_FORMAT,
  },

  /**
   * The field properties.
   */
  fieldProps: {
    type: Object,
  },

  /**
   * The datetime time format.
   */
  timeFormat: {
    type: String,
    default: DEFAULT_TIME_FORMAT,
  },

  /**
   * The dialog properties.
   */
  textProps: {
    type: Object,
    default: () => ({
      class: 'px-0',
    }),
  },

  /**
   * The tab time icon.
   */
  timeIcon: {
    type: String,
    default: DEFAULT_TIME_ICON,
  },

  /**
   * { item_description }
   */
  clearText: {
    type: String,
    default: DEFAULT_CLEAR_TEXT,
  },

  /**
   * { item_description }
   */
  okText: {
    type: String,
    default: DEFAULT_OK_TEXT,
  },

  /**
   * The date picker properties.
   */
  datePickerProps: {
    type: Object,
  },

  /**
   * The reset properties.
   */
  resetProps: {
    type: Object,
  },

  /**
   * The reset properties.
   */
  reverse: {
    type: Boolean,
  },

  /**
   * 
   */
  selectButtonText: {
    type: String,
    default: 'Seleccionar',
  },

  /**
   * The submit properties.
   */
  submitProps: {
    type: Object,
    default: () => ({
      color: 'primary',
    }),
  },

  /**
   * The time picker properties.
   */
  timePickerProps: {
    type: Object,
  },

  /**
   * The datetime value.
   */
  value: {
    type: [Date, String],
    default: `${DEFAULT_DATE} ${DEFAULT_TIME}`,
  },
}