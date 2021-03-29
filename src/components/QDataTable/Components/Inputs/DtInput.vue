<template>
  <q-input ref="input" dense v-bind="$attrs" v-on="$listeners"></q-input>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { QInput } from 'quasar';

import { DtInputsValidationMixin } from './Common/DtInputsValidationMixin';

@Component({ components: { QInput } })
export default class DtInput extends Mixins(DtInputsValidationMixin) {}
</script>
