<template>
  <div class="form pa-4">
    <v-text-field label="Titulo" v-model="vwTableTitle"/>
    <v-switch label="no-filter" v-model="vwTableNoFilter"/>
    <v-switch label="no-menu" v-model="vwTableNoMenu"/>
    <v-switch label="no-refresh" v-model="vwTableNoRefresh"/>
    <v-switch label="no-search" v-model="vwTableNoSearch"/>
    <v-switch label="show-select" v-model="vwTableShowSelect"/>
    <br/>
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
          noFilter: this.vwTableNoFilter,
          noMenu: this.vwTableNoMenu,
          noRefresh: this.vwTableNoRefresh,
          noSearch: this.vwTableNoSearch,
          showSelect: this.vwTableShowSelect,
          service: () => ({
            items: [
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              },
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              },
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              },
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              },
              {
                text: 'text',
                date: 'text',
                datetime: new Date(),
                hour: '00:00',
                float: 1.5,
                number: 15,
                rut: 179790106,
              },
            ]
          }),
          title: this.vwTableTitle,
        }
      }
    },
    data() {
      return {

        vwTableNoFilter: false,
        vwTableNoMenu: false,
        vwTableNoRefresh: false,
        vwTableNoSearch: false,
        vwTableShowSelect: false,
        vwTableTitle: "",

        /**
         * The table selected.
         */
        vwTableSelected: [],
      }
    },
  }
</script>
