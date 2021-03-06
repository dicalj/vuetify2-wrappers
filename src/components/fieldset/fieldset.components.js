//
import { VAlert, VCheckbox, VDivider, VRating, VSlider, VSubheader } from 'vuetify/lib'
import { VAutocomplete, VCombobox } from 'vuetify/lib'
import { VDataTable, VFileInput, VSelect, VTextarea, VTextField, VSwitch } from 'vuetify/lib'
import { VToolbarTitle } from 'vuetify/lib'

//
// import { VComboboxModel } from './models'

// custom fields
import VAutocompleteModel from '../fields/autocomplete-model'
import VCarouselField from '../fields/carousel'
import VCheckboxGridField from '../fields/checkbox-grid'
import VCheckboxGroupField from '../fields/checkbox-group'
import VComboboxModel from '../fields/combobox-model'
import VCurrencyField from '../fields/currency'
import VDateField from '../fields/date'
import VDateTimeField from '../fields/datetime'
import VFloatField from '../fields/float'
import VNative from '../fields/native'
import VPasswordField from '../fields/password'
import VRadioGridField from '../fields/radio-grid'
import VRadioGroupField from '../fields/radio-group'
import VRutField from '../fields/rut'
import VSelectModel from '../fields/select-model'
import VTableField from '../fields/table'
import VTimeField from '../fields/time'
import VTitleField from '../fields/title'

//vue2-editor
import { VueEditor as VEditor } from "vue2-editor"

//
export default {
  VAlert,
  VAutocomplete,
  VAutocompleteModel,
  VCarouselField,
  VCheckbox,
  VCheckboxGridField,
  VCheckboxGroupField,
  VCombobox,
  VComboboxModel,
  VCurrencyField,
  VDataTable,
  VDateField,
  VDateTimeField,
  VDivider,
  VEditor,
  VFileInput,
  VFloatField,
  //VIconField,
  VNative,
  VPasswordField,
  VRadioGridField,
  VRadioGroupField,
  VRating,
  VRutField,
  VSelect,
  VSelectModel,
  VSlider,
  VTableField,
  VTextarea,
  VTextField,
  VTimeField,
  VTitleField,
  VToolbarTitle,
  VSubheader,
  VSwitch,
}
