//import { format, parse } from 'date-fns'

const DEFAULT_DATE = ''
const DEFAULT_DATE_ICON = 'mdi-calendar'
const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd'
const DEFAULT_TIME = '00:00:00'
const DEFAULT_TIME_ICON = 'mdi-clock'
const DEFAULT_TIME_FORMAT = 'HH:mm:ss'
const DEFAULT_DIALOG_WIDTH = 340
const DEFAULT_CLEAR_TEXT = 'cancelar'
const DEFAULT_OK_TEXT = 'aceptar'

export default {
  name: 'v-datetime-picker',
  props: {
    cardProps: {
      type: Object
    },
    value: {
      type: [Date, String],
      default: null
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    label: {
      type: String,
      default: ''
    },
    dialogWidth: {
      type: Number,
      default: DEFAULT_DIALOG_WIDTH
    },
    dateIcon: {
      type: String,
      default: DEFAULT_DATE_ICON
    },
    dateFormat: {
      type: String,
      default: DEFAULT_DATE_FORMAT
    },
    timeFormat: {
      type: String,
      default: DEFAULT_TIME_FORMAT
    },
    timeIcon: {
      type: String,
      default: DEFAULT_TIME_ICON
    },
    clearText: {
      type: String,
      default: DEFAULT_CLEAR_TEXT
    },
    okText: {
      type: String,
      default: DEFAULT_OK_TEXT
    },
    textFieldProps: {
      type: Object
    },
    datePickerProps: {
      type: Object
    },
    timePickerProps: {
      type: Object
    }
  },
  data() {
    return {
      display: false,
      activeTab: 0,
      date: DEFAULT_DATE,
      time: DEFAULT_TIME
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    dateTimeFormat() {
      return this.dateFormat + ' ' + this.timeFormat
    },
    defaultDateTimeFormat() {
      return DEFAULT_DATE_FORMAT + ' ' + DEFAULT_TIME_FORMAT
    },
    formattedDatetime() {
      return this.selectedDatetime ? format(this.selectedDatetime, this.dateTimeFormat) : ''
    },
    selectedDatetime() {
      if (this.date && this.time) {
        let datetimeString = this.date + ' ' + this.time
        if (this.time.length === 5) {
          datetimeString += ':00'
        }
        return parse(datetimeString, this.defaultDateTimeFormat, new Date())
      } else {
        return null
      }
    },
    dateSelected() {
      return !this.date
    }
  },
  methods: {
    init() {
      if (!this._value) {
        return
      }

      let initDateTime
      if (this._value instanceof Date) {
        initDateTime = this._value
      } else if (typeof this._value === 'string' || this._value instanceof String) {
        // see https://stackoverflow.com/a/9436948
        initDateTime = parse(this._value, this.dateTimeFormat, new Date())
      }

      this.date = format(initDateTime, DEFAULT_DATE_FORMAT)
      this.time = format(initDateTime, DEFAULT_TIME_FORMAT)
    },
    okHandler() {
      this.resetPicker()
      this.$emit('input', this.selectedDatetime.toLocaleString().split('/').join('-'))
    },
    clearHandler() {
      this.resetPicker()
      this.date = DEFAULT_DATE
      this.time = DEFAULT_TIME
      this.$emit('input', null)
    },
    resetPicker() {
      this.display = false
      this.activeTab = 0
      if (this.$refs.timer) {
        this.$refs.timer.selectingHour = true
      }
    },
    showTimePicker() {
      this.activeTab = 1
    }
  },
  watch: {
    _value: function() {
      this.init()
    }
  }
}