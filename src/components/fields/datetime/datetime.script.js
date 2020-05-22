//
import VDateTimePickerComputed from './datetime.computed'
import VDateTimePickerData from './datetime.data'
import VDateTimePickerMethods from './datetime.methods'
import VDateTimePickerProps from './datetime.props'
import VDateTimePickerWatch from './datetime.watch'

//
export default {

  /**
   * The import options.
   */
  data: VDateTimePickerData,
  props: VDateTimePickerProps,
  computed: VDateTimePickerComputed,
  methods: VDateTimePickerMethods,
  watch: VDateTimePickerWatch,

  /**
   * Called on component mounted.
   */
  mounted() {
    this.init()
  },
}