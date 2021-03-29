<template>
  <q-tr :props="tableProps">
    <q-td v-if="selectable" auto-width> </q-td>
    <q-td
      v-for="column in tableProps.cols"
      :key="column.name"
      :props="tdProps"
      :class="{ 'text-center': column.name === 'actions' }"
    >
      <slot :name="FormRowNamespace.slotName(column.name)" :props="tableProps">
        <template v-if="column.name === 'actions'">
          <q-btn
            dense
            round
            size="sm"
            color="positive"
            icon="check"
            :loading="loading"
            :disabled="loading"
            @click="submit"
          />
          <q-btn
            dense
            round
            size="sm"
            color="negative"
            icon="clear"
            @click="cancel"
          />
        </template>
        <template v-else-if="!column.form">
          <div>
            {{ formData[column.field] }}
          </div>
        </template>
        <template v-else>
          <component
            ref="formInput"
            :is="inputComponent(column.form.type)"
            v-bind="column.form.attributes"
            :value="formData[column.field]"
            @input="changeFormData(column.field, $event)"
          />
          <!--
          <dt-input
            v-if="column.form.type === 'input'"
            ref="formInput"
            v-bind="column.form.qAttrs"
            :value="formData[column.field]"
            @input="changeFormData(column.field, $event)"
          ></dt-input>
          <dt-select
            v-else-if="column.form.type === 'select'"
            ref="formInput"
            v-bind="column.form.qAttrs"
            :options="column.form.options"
            :value="formData[column.form.controlField]"
            @input="changeFormData(column.form.controlField, $event)"
          ></dt-select>
          -->
        </template>
      </slot>
    </q-td>
  </q-tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { QTr, QTd } from 'quasar';

import { createRowInputComponent } from '../../Factories/RowInputComponentFactory';

import DtInput from '../Inputs/DtInput.vue';
import DtSelect from '../Inputs/DtSelect.vue';

import {
  DtSlotNamespace,
  FormRowSlotNamespace
} from '../../Behavior/SlotNamespaces/DtSlotNamespace';

@Component({ components: { QTr, QTd, DtInput, DtSelect } })
export default class DtFormRow extends Vue {
  @Prop({ default: false }) readonly selectable!: boolean;
  @Prop({ required: true }) readonly formData!: Record<string, any>;
  @Prop({ required: true }) readonly tableProps!: Record<string, any>;

  loading = false;

  get FormRowNamespace(): DtSlotNamespace {
    return FormRowSlotNamespace;
  }

  get isTopRow() {
    return Object.keys(this.tableProps).length === 1;
  }

  get tdProps() {
    return !this.isTopRow ? this.tableProps : undefined;
  }

  get isSelectable() {
    return this.tableProps.selected !== undefined;
  }

  inputComponent(type: any): any {
    return createRowInputComponent(type);
  }

  submit() {
    const inputs = this.$refs.formInput;

    if (!inputs || !Array.isArray(inputs)) return;

    this.loading = true;

    Promise.all(inputs.map((form: any) => form.validate()))
      .then(() => {
        this.$emit('submit', this.formData);
      })
      .catch(error => error)
      .finally(() => {
        this.loading = false;
      });
  }

  cancel() {
    this.$emit('cancel', this.formData);
  }

  changeFormData(field: string, value: any) {
    const formData = this.createFormData(field, value);

    this.$emit('update:formData', formData);
    this.$emit('watch:formData', { field, formData });
  }

  createFormData(field: string, value: any) {
    return {
      ...this.formData,
      [field]: value
    };
  }
}
</script>
