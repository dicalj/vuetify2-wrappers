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
            name: 'nested.password',
            type: 'password-field',
            props: {
              hint: 'password-hint-text',
              label: 'password-field',
              persistentHint: true,
              placeholder: 'password-field',
            }
          },
          {
            name: 'nested.rut',
            type: 'rut-field',
            props: {
              hint: 'rut-hint-text',
              label: 'rut-field',
              persistentHint: true,
              placeholder: 'rut-field',
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
            name: 'date',
            type: 'date-field',
            prop: {
              fieldProps: {
                label: 'date-field',
              },
              pickerProps: {
                format: '24hr',
                locale: 'es',
              },
            },
          },
          {
            name: 'time',
            type: 'time-field',
            prop: {
              fieldProps: {
                label: 'time-field',
              },
              pickerProps: {
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
          {
            name: 'currency',
            type: 'currency-field',
            props: {
              hint: 'currency',
              label: 'currency',
              persistentHint: true,
              placeholder: 'currency',   
            },
          },
          {
            name: 'float',
            type: 'float-field',
            props: {
              hint: 'float',
              label: 'float',
              persistentHint: true,
              placeholder: 'float',   
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
          password: 'password-field-nested',
          text: 'text-field-nested',
          rut: 179790106,
        },
        text: 'text-field',
        autocomplete: 'autocomplete-field',
        combobox: 'combobox-field',
        select: 'select-field',
        flag: true,
        rating: 0,
        date: '2020-05-05',
        datetime: '2020-05-05 12:00',
        time: '12:00',
        currency: 100.50,
        float: 100.50,
      }
    }
  },
}
</script>
