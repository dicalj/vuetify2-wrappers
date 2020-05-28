// components
import VwForm from './src/components/form'

// layouts
import VwLayoutCenter from './src/components/layouts/center'

// plugin
export default {
  install: function (Vue, options) {
    Vue.mixin({
      components: {
        VwForm,
        VwLayoutCenter,
      },
    })
  }
}
