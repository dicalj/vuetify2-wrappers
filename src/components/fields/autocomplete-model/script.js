 export default {
  name: 'model-autocomplete',
  computed: {
    /**
     *
     */
    autocompleteProps() {
        let props = {
            autoSelectFirst: this.autoSelectFirst,
            cacheItems: this.cache,
            chips: this.chips,
            class: String('autocomplete-model ').concat(this.class || ''),
            clearable: this.readonly ? false : this.clearable,
            flat: this.flat,
            hideDetails: this.hideDetails,
            items: [...this.items],
            itemText: this.itemText,
            itemValue: this.itemValue,
            loading: this.loading,
            multiple: this.multiple,
            noDataText: this.loading ? this.loadingText : this.noDataText,
            outline: this.outline,
            placeholder: this.label + '...',
            readonly: this.readonly,
            singleLine: this.singleLine,
            solo: this.solo,
            returnObject: !this.noObject,
        }
        return Object.assign(props, this.$attrs, { items: this.items })
    },

    /**
     *
     */
    currentRequest() {
        return this.model
            .append(this.noModeler ? this.append : this.model.appends || [])
            .include(this.noModeler ? [] : this.model.includes || [])
            .where(this.paramSearch || '', this.search || '')
            .params({
                ...this.attachParams,
                limit: this.limit,
                page: this.page,
                filter: this.paramFilter,
            })
    },

    /**
     *
     */
    currentSearch() {
        return this.search === null ? '' : this.search
    },

    /**
     *
     */
    hasItem() {
        return this.items.some(this.filterByValue)
    },

    /**
     *
     */
    isEmpty() {
        return !this.hasItem
    },

    /**
     *
     */
    isPlainValue() {
        return (
            typeof this.value === 'number' || typeof this.value === 'string'
        )
    },

    limit() {
        return this.noAsyncSearch ? -1 : 10
    },

    /**
     *
     */
    _rules() {
        return this.rules.map(this.mapRule)
    },
  },
  data() {
    return {
        cache: false,
        items: [],
        last: 0,
        loading: false,
        page: 1,
        search: '',
        selected: [],
    }
  },
  methods: {

    /**
     * Gets the first item.
     *
     * @return     {<type>}  The first item.
     */
    getFirstItem() {
        return this.items.slice().shift()
    },

    /**
     *
     */
    getSelected() {
        return this.items.filter(this.filterBySelected).pop() || {}
    },

    /**
     *
     */
    fetch() {
        this.loading = true
        this.last = Date.now()
        this.currentRequest.get().then(this.setter)
    },

    fetchByKeyUp() {
        if (!this.noAsyncSearch) {
            if (this.last < Date.now() - 200) {
                setTimeout(this.fetch, 200)
            }
        }
    },

    /**
     *
     */
    filterBySelected(item) {
        return this.isPlainValue && item[this.itemValue] === this.selected
    },

    /**
     *
     */
    filterByValue(item) {
        return this.isPlainValue && item[this.itemValue] === this.value
    },

    /**
     *
     */
    mapRule(f) {
        return f(this.value)
    },

    /**
     *
     */
    reset() {
        switch (typeof this.value) {
            case 'number':
                this.selected = this.value
                break
            case 'object':
                this.selected = this.value
                break
        }
    },

    /**
     *
     */
    scrolled(event) {
        const target = event.target,
            targetOffsetHeight = target.offsetHeight,
            targetScrollHeight = target.scrollHeight,
            targetScrollTop = target.scrollTop,
            bottomHeightDiff =
                targetScrollHeight - (targetScrollTop + targetOffsetHeight)

        if (bottomHeightDiff === 0) {
            this.page++
        }
    },

    /**
     * 
     */
    setFirst() {

        //
        let first = this.getFirstItem()

        //
        if (first) {
            this.selected = []
            this.selected = this.noObject ? first[this.itemValue] : first
        }
    },

    /**
     *
     */
    setItem(item) {
        if (!this.items.some(i => i.id === item.id )) this.items.push(item)
    },

    /**
     *
     */
    setter(response) {
        this.items = [
            ...this.items,
            ...response.data.filter(({ id }) => this.items.every(item => item.id !== id)),
        ]

        this.page =
            response.last_page > this.page ? this.page : response.last_page
        this.loading = false
    },

    /**
     *
     */
    shape() {
        return this.model
            .include(this.model.includes || [])
            .where(this.paramSearch || '', this.search || '')
            .params({ page: this.page, filter: this.paramFilter })
    },

    /**
     *
     */
    watchScroll() {
        this.$refs.autocomplete.$refs.menu.$refs.content.onscroll = this.scrolled
    },
  },
  mounted() {
    this.fetch()
    this.watchScroll()
    this.reset()
  },
  props: {
    /**
     *
     */
    attachParams: {
        type: Object,
        default: () => ({}),
    },

    /**
     *
     */
    append: {
        type: Array,
        default: () => [],
    },

    /**
     *
     */
    autoSelectFirst: Boolean,

    /**
     *
     */
    chips: Boolean,

    /**
     *
     */
    clearable: {
        type: Boolean,
        default: true,
    },

    /**
     *
     */
    flat: Boolean,

    /**
     *
     */
    hideDetails: Boolean,

    /**
     *
     */
    itemKey: String,

    /**
     *
     */
    itemText: [Function, String],

    /**
     *
     */
    itemValue: [Function, String],

    /**
     *
     */
    label: String,

    /**
     *
     */
    loadingText: {
        type: String,
        default: 'Cargando datos...',
    },

    /**
     *
     */
    model: [Function, Object],

    /**
     *
     */
    multiple: Boolean,

    /**
     *
     */
    noAsyncSearch: Boolean,

    /**
     *
     */
    noModeler: Boolean,

    /**
     *
     */
    noObject: Boolean,

    /**
     *
     */
    noSubmit: Boolean,

    /**
     *
     */
    noDataText: String,

    /**
     *
     */
    outline: {
        type: Boolean,
        default: true,
    },

    /**
     *
     */
    paramFilter: {
        type: Object,
        default: () => ({}),
    },

    /**
     *
     */
    paramSearch: {
        type: String,
        default: 'search',
    },

    /**
     *
     */
    readonly: Boolean,

    /**
     *
     */
    rules: {
        type: Array,
        default: () => [],
    },

    /**
     *
     */
    singleLine: Boolean,

    /**
     *
     */
    solo: Boolean,

    /**
     *
     */
    value: [String, Number, Array, Object],
  },
  watch: {
    /**
     *
     */
    model() {
        this.cache = false
        this.items = []
        this.fetch()
        this.reset()
        this.cache = false
    },

    /**
     *
     */
    search() {
        this.page = 0
        //this.fetch()
    },

    /**
     *
     */
    selected(v) {
        //
        //console.log(v)
        if (v && v.length === 0) return
        if (!this.noAsyncSearch) {
            //
            const findValue = this.noObject
                ? this.selected
                : this.selected[this.itemValue]
            const findValueString = String(findValue)

            //
            if (this.isEmpty && !this.findValue) {
                if (this.noModeler) {
                    this.model
                        .append(this.append)
                        .params(this.attachParams)
                        .find(findValueString)
                        .then(this.setItem)
                        .then(() => this.$emit('input', this.selected))
                } else {
                    this.model
                        .modeler()
                        .find(findValueString)
                        .then(this.setItem)
                        .then(() => this.$emit('input', this.selected))
                }
            }
        }

        //
        this.$emit('input', this.selected)
    },

    /**
     *
     */
    value(val) {
        if (!this.noAsyncSearch) {
            this.reset()
        }

        if (!val) {
            this.selected = []
            this.search = ''
        }
        //if ( val !== prev ) {
        //    this.reset()
        //}
    },

    /**
     *
     */
    page() {
        if (!this.noAsyncSearch) {
            this.fetch()
        }
    },
  },
}