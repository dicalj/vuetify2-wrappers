// components
import VwBtn from './src/components/buttons/button'
import VwForm from './src/components/form'
import VwList from './src/components/list'
import VwTable from './src/components/table'

// layouts
import VwLayoutCenter from './src/components/layouts/center'
// import VwLayoutDashboard from './src/components/layouts/dashboard'
//import VwLayoutInbox from './src/components/layouts/inbox'
import VwLayoutNotFound from './src/components/layouts/not-found'

// plugin
export default {
  install: function (Vue, options) {
    Vue.mixin({
      components: {
        VwBtn,
        VwForm,
        VwLayoutCenter,
        VwLayoutNotFound,
        VwList,
        VwTable,
      },
    })
  }
}
