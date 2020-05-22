//
export default {

  /**
   * 
   */
  getValue(path = '') {
    return path.split('.').reduce(this.reduceValue, this._value)
  },
  
  /**
   * 
   */
  reduceValue(value, path) {
    return value[path]
  },

  /**
   * 
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