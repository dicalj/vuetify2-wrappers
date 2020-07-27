//
export default {
  computed: {

    /**
     * 
     */
    itemized() {
      return this.items.length
    },
  },
  methods: {

    /**
     * 
     */
    onItem(event) {
      this.$emit('click-item', event)
    },
  },
  props: {

    /**
     * The v-list-item-action properties.
     */
    actionProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-card-actions properties.
     */
    actionsProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item-avatar properties.
     */
    avatarProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-card loading flag.
     */
    busy: {
      type: [Boolean, String],
    },

    /**
     * The v-card properties.
     */
    cardProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item-content properties.
     */
    contentProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item-avatar slot v-icon content.
     */
    itemAvatar: {
      type: String,
    },

    /**
     * The v-list-item properties.
     */
    itemProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item-subtitle properties.
     */
    itemSubtitle: {
      type: String,
      default: '',
    },

    /**
     * The v-list-item-subtitle properties.
     */
    itemSubtitleProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item-title properties.
     */
    itemTitle: {
      type: String,
      default: '',
    },

    /**
     * The v-list-item-title properties.
     */
    itemTitleProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-list-item items.
     */
    items: {
      type: Array,
      default: () => ([]),
    },

    /**
     * The v-list properties.
     */
    listProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-subheader display flag.
     */
    noSubheader: {
      type: Boolean,
    },

    /**
     * The v-subheader text.
     */
    subheader: {
      type: String,
      default: '',
    },

    /**
     * The v-subheader properties.
     */
    subheaderProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-card-text properties.
     */
    textProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * The v-card-title text.
     */
    title: {
      type: String,
      default: '',
    },

    /**
     * The v-card-title properties.
     */
    titleProps: {
      type: Object,
      default: () => ({}),
    },
  },
}