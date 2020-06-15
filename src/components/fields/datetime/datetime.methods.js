//
const DEFAULT_DATE = new Date(Date.now()).toLocaleDateString().split('/').reverse().join('-')
const DEFAULT_TIME = new Date(Date.now()).toLocaleTimeString()

//
export default {

  /**
   * Initializes the object.
   */
  init() {
    if (this.value) {
      this.date = this.value.split(' ').shift()
      this.time = this.value.split(' ').pop()
    } else {
      this.onClickReset()
    }
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