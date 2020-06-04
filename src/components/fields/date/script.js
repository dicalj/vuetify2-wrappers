export default {
  name: "date-field",
  computed: {

    /**
     *
     */
    isMonthly() {
        return this.pickerProps.type === 'month'
    },

    /**
     *
     */
    isReadonly() {
        return this.pickerProps.readonly
    },

    /**
     *
     */
    selectButtonProps() {
      return {
        color: this.readonly ? '' : 'primary',
        style: {
          marginTop: '-2px',
        }
      }
    },
  },
  data () {
    return {
        date: "",
        formatted: "",
        modal: false,
    }
  },
  props: {

    /**
     *
     */
    fieldProps: {
        type: Object,
        default: () => ({})
    },

    /**
     *
     */
    hideDetails: Boolean,

    /**
     *
     */
    pickerProps: {
        type: Object,
        default: () => ({})
    },

    /**
     *
     */
    outline: Boolean,
    solo: Boolean,
    flat: Boolean,

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
    value: String,
},
methods: {

    /**
     *
     */
    format ( data ) {

        //
        const date  = new Date( this.isMonthly ? data + '-15' : data )
            , year  = date.getUTCFullYear()
            , month = date.getUTCMonth() + 1 < 10 ? "0" + ( date.getUTCMonth() + 1 ) : date.getUTCMonth() + 1
            , day   = date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate()

        //
        const hasReturn = isNaN(year) || isNaN( month ) || isNaN( day )

        //
        return hasReturn ? '' : this.isMonthly ? [ month, year ].join( "-" ) : [ day, month, year ].join( "-" )
    },

    /**
     *
     */
    reset () {
        this.date = this.value || "";
    },

    /**
     * { function_description }
     *
     * @param      {<type>}  days    The days
     */
    sumDays(days) {

        //
        var date  = new Date( this.isMonthly ? this.date + '-15' : this.date )

        //
        date.setDate(date.getUTCDate() + days)

        console.log(date, days)

        //
        const year  = date.getUTCFullYear()
            , month = date.getUTCMonth() + 1 < 10 ? "0" + ( date.getUTCMonth() + 1 ) : date.getUTCMonth() + 1
            , day   = date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate()

        //
        const hasReturn = isNaN(year) || isNaN( month ) || isNaN( day )

        //
        this.formatted = hasReturn ? '' : this.isMonthly ? [ month, year ].join( "-" ) : [ day, month, year ].join( "-" )
    },
  },
  mounted () {
    this.reset()
  },
  watch: {

    /**
     *
     */
    date () {
        this.formatted = this.format( this.date );
    },

    /**
     *
     */
    formatted () {
        if ( !this.pickerProps.readonly ) this.$emit( 'input', this.date )
    },

    /**
     *
     */
    value () {
        this.reset()
    }
  },
}