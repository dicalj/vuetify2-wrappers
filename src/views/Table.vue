<template>
  <div class="form pa-4">
    <vw-table v-bind="vwTableProps" v-model='vwTableSelected'/>
  </div>
</template>

<script>
  // required components
  import VwTable from '@/components/table'

  // component 
  export default {
    name: 'table-view',
    components: {
      VwTable,
    },
    computed: {

      /**
       *  The table props
       */
      vwTableProps() {
        return {
          filters: [

          ],
          headers: [
            {
              text: 'text',
              value: 'text',
            },
            {
              text: 'date',
              value: 'date',
            },
            {
              text: 'text',
              value: 'datetime',
            },
            {
              text: 'hour',
              value: 'hour',
            },
            {
              text: 'float',
              value: 'float',
            },
            {
              text: 'number',
              value: 'number',
            },
            {
              text: 'rut',
              value: 'rut',
            },
          ],
          items: [
            {
              text: 'text',
            },
          ],
          fetch: () => ({
            data: [
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              }
            ]
          })
        }
      }
    },
    data() {
      return {

        /**
         * The table selected.
         */
        vwTableSelected: [],
      }
    },
  }
</script>
