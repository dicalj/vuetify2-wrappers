//
import VwTableComponents from './table.components'
import VwTableComputed from './table.computed'
import VwTableData from './table.data'
import VwTableMethods from './table.methods'
import VwTableProps from './table.props'
import VwTableWatch from './table.watch'

//
export default {
  name: 'vw-table',
  components: VwTableComponents,
  computed: VwTableComputed,
  data: VwTableData,
  methods: VwTableMethods,
  props: VwTableProps,
  watch: VwTableWatch,

  /**
   * Called when the component mounted.
   */
  mounted() {
    this.clean()
    this.refresh()
    this.ready()
  },
}