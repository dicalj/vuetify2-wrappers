//
export default {

  /**
   * 
   */
  type: item => item.flag ? item.type : 'v-' + item.type,
}