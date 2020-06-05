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
      block, 
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
      block, 
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