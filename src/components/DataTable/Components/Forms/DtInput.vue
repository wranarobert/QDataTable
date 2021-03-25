<template>
  <q-input
    ref="input"
    v-bind="$attrs"
    v-on="$listeners"
    dense
  ></q-input>
</template>

<script>
import QValidation from '../../Behavior/Forms/QValidation';

export default {
  inheritAttrs: false,
  mixins: [QValidation],
}
</script>

