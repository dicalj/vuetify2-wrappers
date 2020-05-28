// components
import VwBtn from '../../buttons/button'

// component
export default {
  components: {
    VwBtn,
  },
  data() {
    return {
      menues: false,
    }
  },
  props: {

    /**
     * Export menu item emit
     */
    exportEmit: {
      type: String,
      default: 'click-export',
    },

    /**
     * Export menu item text
     */
    exportText: {
      type: String,
      default: 'Exportar',
    },

    /**
     * Menu button props.
     */
    menuButtonProps: {
      type: Object,
      default: () => ({
        dark: true,
        icon: true,
      }),
    },

    /**
     * Toolbar menu props.
     */
    menuProps: {
      type: Object,
      default: () => ({
        contentClass: 'elevation-2',
        offsetY: true,
      }),
    },

    /**
     * 
     */
    noMenu: {
      type: Boolean,
      default: false,
    },
    
    /**
     * Primary item emit
     */
    primaryEmit: {
      type: String,
      default: 'click-primary',
    },

    /**
     * Primary item icon
     */
    primaryIcon: {
      type: String,
      default: 'mdi-plus',
    },

    /**
     * Primary item props
     */
    primaryProps: {
      type: Object,
      default: () => ({
        bottom: true,
        color: 'accent',
        icon: true,
        tip: 'primary text',
      }),
    },

    /**
     * Secondary item emit.
     */
    secondaryEmit: {
      type: String,
      default: 'click-secondary',
    },

    /**
     * Secondary item icon.
     */
    secondaryIcon: {
      type: String,
      default: 'mdi-filter',
    },

    /**
     * Secondary item props.
     */
    secondaryProps: {
      type: Object,
      default: () => ({
        bottom: true,
        icon: true,
        tip: 'secondary tip',
      }),
    },

    /**
     * Toolbar props.
     */
    toolbarProps: {
      type: Object,
      default: () => ({          
        color: 'primary',
        dark: true,
        dense: true,
        flat: true,
      }),
    },
  }
}