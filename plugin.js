//
import VwForm from './src/components/form'

//
export default {
  install: function (Vue, options) {
    Vue.mixin({
      components: {
        VwForm,
      },
    })
  }
}
