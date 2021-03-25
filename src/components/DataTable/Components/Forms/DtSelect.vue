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

<script>
import QValidation from '../../Behavior/Forms/QValidation';

export default {
  props: {
    options: {
      type: [Function, Array],
      default: () => Promise.resolve([]),
    },
    optionValue: {
      type: String,
      default: 'id',
    },
    optionLabel: {
      type: String,
      default: 'name',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data: () => ({
    list: [],
  }),
  watch: {
    options: {
      immediate: true,
      handler(options) {
        console.log(typeof options);

        if (typeof options === 'object') {
          this.list = options;
          return;
        }

        options().then(list => {
          this.list = list;
        });
      },
    },
  },
  inheritAttrs: false,
  mixins: [QValidation],
};
</script>
