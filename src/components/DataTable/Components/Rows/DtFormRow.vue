<template>
  <q-tr :props="props">
    <q-td v-for="column in props.cols" :key="column.name">
      <slot :name="formRowNamespace.createSlot(column.name)" :props="props">
        <template v-if="column.name === 'actions'">
          <div class="text-right">
            <q-btn
              round
              size="sm"
              color="positive"
              icon="check"
              :loading="loading"
              :disabled="loading"
              @click="submit"
            />
            <q-btn
              round
              size="sm"
              color="negative"
              icon="clear"
              @click="cancel"
            />
          </div>
        </template>
        <template v-else-if="!column.form">
          {{ formData[column.field] }}
        </template>
        <dt-input
          v-else-if="column.form.type === 'input'"
          ref="formInput"
          v-bind="column.form.qAttrs"
          :value="formData[column.field]"
          @input="formDataChange(column.field, $event)"
        ></dt-input>
        <dt-select
          v-else-if="column.form.type === 'select'"
          ref="formInput"
          v-bind="column.form.qAttrs"
          :options="column.form.options"
          :value="formData[column.form.controlField]"
          @input="formDataChange(column.form.controlField, $event)"
        ></dt-select>
      </slot>
    </q-td>
  </q-tr>
</template>

<script>
import DtInput from '../Forms/DtInput';
import DtSelect from '../Forms/DtSelect';

export default {
  inject: ['formRowNamespace'],
  props: {
    props: {
      type: Object,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    submit() {
      const inputs = this.$refs.formInput;

      if (!inputs) return;

      this.loading = true;

      Promise.all(inputs.map(form => form.validate()))
        .then(() => {
          this.$emit('submit', this.formData);
        })
        .catch(error => error)
        .finally(() => {
          this.loading = false;
        });
    },
    cancel() {
      this.$emit('cancel', this.formData);
    },
    formDataChange(field, value) {
      const formData = this.createFormData(field, value);

      this.$emit('update:formData', formData);
      this.$emit('watch:formData', { field, formData });
    },
    createFormData(field, value) {
      return {
        ...this.formData,
        [field]: value,
      };
    },
  },
  inheritAttrs: false,
  components: {
    DtInput,
    DtSelect,
  },
};
</script>
