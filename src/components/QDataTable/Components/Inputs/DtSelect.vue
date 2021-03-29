<template>
  <q-select
    ref="input"
    v-bind="$attrs"
    map-options
    emit-value
    :option-value="optionValue"
    :option-label="optionLabel"
    :options="list"
    :value="value"
    v-on="$listeners"
    dense
  ></q-select>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { QSelect } from 'quasar';

import { DtInputsValidationMixin } from './Common/DtInputsValidationMixin';

@Component({ components: { QSelect } })
export default class DtSelect extends Mixins(DtInputsValidationMixin) {
  list = [];
}
</script>
