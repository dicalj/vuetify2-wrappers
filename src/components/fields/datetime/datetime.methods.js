//
const DEFAULT_DATE = new Date(Date.now()).toLocaleDateString()
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
      if(this.value !== null) {
        this.onClickReset()
      } else {
        this.date = ''
        this.time = ''
      }
    }
  },

  /**
   * 
   */
  mapDate(day) {
    return day.length < 2 ? `0${ day }` : day
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
    this.date = DEFAULT_DATE.split('/').reverse().map(this.mapDate).join('-')
    this.time = DEFAULT_TIME.split(':').map(this.mapDate).join(':')
  },

  /**
   * Reset the datetime input.
   */
  resetInput() {
    this.$emit('input', this.datetime)      
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

    const date = this.date
    const time = this.time
    
    this.$emit('input', `${date} ${time}`)
  },
}