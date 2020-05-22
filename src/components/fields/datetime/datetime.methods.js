//
const DEFAULT_DATE = ''
const DEFAULT_TIME = '00:00:00'

//
export default {

  /**
   * Initializes the object.
   */
  init() {

  },

  /**
   * Called on click reset.
   */
  onClickReset() {
    this.resetData()
    this.resetTimer()
    this.resetPicker()
    this.resetInput()
  },

  /**
   * Called on click submit.
   */
  onClickSubmit() {
    this.resetPicker()
    this.resetTimer()
    this.updateInput()
  },

  /**
   * Called on input date.
   */
  onInputDate() {
    this.tab = 1
  },

  /**
   * Reset the datetime field data.
   */
  resetData() {
    this.date = DEFAULT_DATE
    this.time = DEFAULT_TIME
  },

  /**
   * Reset the datetime input.
   */
  resetInput() {
    this.$emit('input', null)      
  },

  /**
   * Reset the picker options.
   */
  resetPicker() {
    this.dialog = false
    this.tab    = 0
  },

  /**
   * Reset the time picker options.
   */
  resetTimer() {
    if (this.$refs.timer) this.$refs.timer.selectingHour = true
  },

  /**
   * Update the datetime input.
   */
  updateInput() {
    this.$emit('input', this.datetime.toLocaleString().split('/').join('-'))
  },
}