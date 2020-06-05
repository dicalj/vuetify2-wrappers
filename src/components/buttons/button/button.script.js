//
export default {
  computed: {
    buttonProps() {
      return this.mapButtonProps(this.$attrs)
    },
    tooltipProps() {
      return this.mapTooltipProps(this.$attrs)
    },
  },
  methods: {
    mapButtonProps: ({ 
      classes, 
      color, 
      dark, 
      disabled, 
      icon, 
      large, 
      loading, 
      small, 
      text 
    }) => ({ 
      class: classes, 
      color, 
      dark, 
      disabled,
      icon, 
      large, 
      loading,
      small, 
      text 
    }),
    mapTooltipProps: ({ 
      bottom, 
      left
    }) => ({ 
      bottom, 
      left 
    }),
  },
  props: {
    tip: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  }
}