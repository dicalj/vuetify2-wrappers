<template>
  <v-conatiner>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item @click='wFormModel = {}'>
            <v-list-item-content>
              <v-list-item-title>
                TITULO
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        2
      </v-col>
      <v-col>
        3
      </v-col>
    </v-row>
  </v-conatiner>
</template>

<script>
// @ is an alias to /src
// import WForm from '@/components/form'

export default {
  name: 'form',
  components: {
    // WForm,
  },
  computed: {

    /**
     * 
     */
    wFormProps() {
      return {

      }
    }
  },
  data() {
    return {
      wFormModel:{
      }
    }
  },

}
</script>
