//
export default {

  /**
   * Determines de component tag of item.
   *
   * @param   {Object}  item - The item.
   * @return  {String}  component tag.
   */
  type(item) {
    return item.flag ? item.type : 'v-' + item.type
  },
}