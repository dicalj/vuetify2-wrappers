//
export default {

  /**
   * 
   */
  iconProps(action) {
    return {
      small: true,
    }
  },

  /**
   * 
   */
  sloter(header) {
    return `item.${header.value}`
  },
}
