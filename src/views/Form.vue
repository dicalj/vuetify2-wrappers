<template>
  <div class="form pa-4">
    <w-form v-bind="wFormProps" v-model='wFormModel'/>
  </div>
</template>

<script>
// @ is an alias to /src
import WForm from '@/components/form'

export default {
  name: 'form',
  components: {
    WForm,
  },
  computed: {

    /**
     * 
     */
    wFormProps() {
      return {
        items: [
          {
            html: 'Fields',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,  
            },
          },
          {
            name: 'nested.text',
            type: 'text-field',
            props: {
              hint: 'hint-text',
              label: 'text-field',
              persistentHint: true,
              placeholder: 'text-field',
              rules: [
                () => 'error'
              ],  
            }
          },
          {
            name: 'nested.text',
            type: 'text-field',
            props: {
              hint: 'hint-text',
              label: 'text-field',
              persistentHint: true,
              placeholder: 'text-field',
              rules: [
                () => 'error'
              ],
              type: 'number',
            }
          },
          {
            html: 'Selects',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,  
            },
          },
          {
            name: 'autocomplete',
            type: 'autocomplete',
            props: {
              hint: 'hint-autocomplete',
              label: 'autocomplete',
              persistentHint: true,
              placeholder: 'autocomplete',
            }
          },
          {
            name: 'combobox',
            type: 'combobox',
            props: {
              hint: 'hint-combobox',
              label: 'combobox',
              persistentHint: true,
              placeholder: 'combobox',
            }
          },
          {
            name: 'select',
            type: 'select',
            props: {
              hint: 'hint-select',
              label: 'select',
              persistentHint: true,
              placeholder: 'select',
            }
          },
          {
            html: 'Flags',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,           
            },
          },
          {
            name: 'flag',
            type: 'switch',
            props: {
              hint: 'switch',
              label: 'switch',
              persistentHint: true,
              placeholder: 'switch',
            }
          },
          {
            name: 'flag',
            type: 'checkbox',
            props: {
              hint: 'checkbox',
              label: 'checkbox',
              persistentHint: true,
              placeholder: 'checkbox',
            }
          },
          {
            name: 'rating',
            type: 'rating',
            props: {
              hint: 'rating',
              label: 'rating',
              persistentHint: true,
              placeholder: 'rating',
            }
          },          
          {
            html: 'Pickers',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,           
            },
          },
          {
            name: 'datetime',
            type: 'date-time-field',
            prop: {
              fieldProps: {
                label: 'date-time-field',
              },
              datePickerProps: {
                locale: 'es',
              },
              timePickerProps: {
                format: '24hr',
                locale: 'es',
              },
            },
          },
          {
            html: 'Models',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,           
            },
          },          
          {
            html: 'Customs',
            type: 'subheader',
            flex: {
              cols: 12,
            },
            props: {
              class: 'px-0 subtitle-2',
              dark: false,           
              inset: false,           
              light: true,           
            },
          },
        ]
      }
    }
  },
  data() {
    return {
      wFormModel:{
        nested: {
          text: 'text-field-nested'
        },
        text: 'text-field',
        autocomplete: 'autocomplete-field',
        combobox: 'combobox-field',
        select: 'select-field',
        flag: true,
        rating: 0,
      }
    }
  },
}
</script>
