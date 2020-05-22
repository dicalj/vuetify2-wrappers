//
export default {

  /**
   * Gets the property value of value-props.
   *
   * @param   {String}  [path=''] - The path.
   * @return  {Object}  The value.
   */
  getValue(path = '') {
    return path.split('.').reduce(this.reduceValue, this._value)
  },
  
  /**
   * Reduces the property value of value-props.
   *
   * @param   {Object}  value - The value.
   * @param   {String}  path - The path.
   * @return  {*}  The value.
   */
  reduceValue(value, path) {
    return value[path]
  },

  /**
   * Converts a item of items-props to standar format to
   * render as component.
   *
   * @param   {Object}  item - a item of items-props.
   * @return  {Object}  a standar item.
   */
  standardize(item) {

    // default values
    const { flex } = this

    // standar format
    return {
      name: String(item.name),
      type: String(item.type),
      flex: Object.assign({}, item.flex || flex),
      prop: Object.assign({}, item.prop || item.props),
      html: String(item.html),
    }
  },

  /**
   * Sets the property value of value-props.
   *
   * @param {String}  [path=''] - The path.
   * @param {Object}  value - The value.
   */
  setValue(path = '', value) {

    //
    var _value = this._value
    var _paths = path.split('.')
    var _paths_pop = _paths.slice().pop()
    var _paths_slice = _paths.slice(0, -1)

    //
    _paths_slice.forEach((path) => {
      _value = _value[path]
    })

    //
    _value[_paths_pop] = value
  },
}