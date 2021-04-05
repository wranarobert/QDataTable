<template>
  <q-dialog persistent v-bind="$attrs" v-on="$listeners">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Edit</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list dense>
          <q-item v-for="column in dataColumns(tableProps)" :key="column.name">
            <q-item-section>
              <q-item-label>{{ column.label }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <template v-if="!column.form">
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
              </template>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-actions class="text-primary">
        <q-btn flat label="Cancel" @click="cancel" />
        <q-space />
        <q-btn flat label="Submit" @click="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { createRowInputComponent } from '../../Factories/RowInputComponentFactory';

@Component
export default class DtFormDialog extends Vue {
  @Prop({ required: true, default: () => ({}) }) readonly formData!: Record<
    string,
    any
  >;
  @Prop({ required: true }) readonly tableProps!: Record<string, any>;

  loading = false;

  inputComponent(type: any): any {
    return createRowInputComponent(type);
  }

  dataColumns(tableProps: Record<string, any>) {
    return tableProps.cols.filter(
      (column: Record<string, any>) =>
        column.name !== 'actions' && column.name !== 'expand'
    );
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
