<template lang='pug'>
  v-combobox( 
    search-input.sync='search'
    v-bind='_comboboxProps' 
    v-model='_value' 
    @keydown='enter' 
    )
</template>

<script>
  export default {
    computed: {
      /**
       * 
       */
      _comboboxProps() {
        return {
          ...this.comboboxProps,
          disabled: this.loading,
          items   : this.items,
          loading : this.loading,
        }
      },
      /**
       * 
       */
      _value: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        },
      },
      /**
       * 
       */
      getAllResults() {
        return this.limit === -1 ? 1 : undefined
      },
      /**
       * 
       */
      params() {
        return {
          get_all_results: this.getAllResults,
          limit: this.getAllResults ? undefined : this.limit,
          sort: this.sort,
        }
      },
    },
    data() {
      return {
        items: [],
        loading: false,
        search: '',
      }
    },
    methods: {
      /**
       * Set the loading state of combobox
       * @param {Boolean} - the loading value
       */
      async busy(loading = false) {
        this.loading = loading
      },
      /**
       * Request the create item data
       * @param {String} - the new item value
       */
      create(value) {
        if (this.allowCreate) {
          return new this
            .model(value)
            .save()
            .then(this.reset)
            .then(this.refresh)
        } else {
          this.busy(false)
          this.items.push(value)
        }
      },
      /**
       * 
       */
      enter(event) {
        if (event.which === 13) {
          this.busy(true)
          this.create(this.generate(event.target.value))
        }
      },
      /**
       * 
       */
      fetch() {
        return this
          .model
          .params(this.params)
          .get()
          .then(this.map)
          .then(this.setter)
      },
      /**
       * 
       */
      generate(value) {
        return {
          [this.comboboxProps.itemText]: value
        }
      },
      /**
       * 
       */
      reset(res) {
        this.value = res
      },
      /**
       * 
       */
      refresh() {
        this
          .busy(true)
          .then(this.fetch)
          .then(this.busy)
      },
      /**
       * 
       */
      setter(items) {
        this.items = items
      },
    },
    props: {
      /**
       * 
       */
      allowCreate: Boolean,
      /**
       * 
       */
      comboboxProps: {
        type: Object,
        default: () => ({}),
      },
      /**
       * 
       */
      fetchKey: {
        type: String,
        default: 'fetch',
      },
      /**
       * 
       */
      limit: {
        type: Number,
        default: 5,
      },
      /**
       * 
       */
      map: {
        type: Function,
        default: res => res.data ? res.data : [],
      },
      /**
       * 
       */
      model: {
        type: Function,
        default: () => () => ({}),
      },
      /**
       * 
       */
      sort: {
        type: String,
        value: '-id',
      },
      /**
       * 
       */
      value: {
        type: String,
        default: '',
      }
    },
    mounted() {
      this.fetch()
    }
  }
</script>
