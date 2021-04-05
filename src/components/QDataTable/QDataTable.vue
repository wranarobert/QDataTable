<template>
  <div>
    <q-table
      :row-key="rowKey"
      :grid="grid"
      :selected="selected"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-if="isAddFormRow" v-slot:top-row="props">
        <!-- Form add row -->
        <dt-form-row
          key="addForm"
          :selectable="selectable"
          :formData="getNewFormData()"
          :tableProps="props"
          @update:formData="updateNewFormRow"
          @watch:formData="watchNewFormData"
          @submit="submitNewRow"
          @cancel="closeNewFormRow"
        >
          <template v-for="(_, name) in formRowSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </dt-form-row>
      </template>

      <template v-slot:body="props">
        <!-- Form edit row -->
        <dt-form-row
          v-if="isEditFormRow(props.row)"
          :selectable="selectable"
          :formData="getEditFormData(props.row)"
          :tableProps="props"
          @update:formData="updateEditFormRow"
          @watch:formData="watchEditFormData"
          @submit="submitEditRow"
          @cancel="closeEditFormRow"
        >
          <template v-for="(_, name) in formRowSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </dt-form-row>

        <!-- View row -->
        <dt-view-row
          v-else
          :selectable="selectable"
          :tableProps="props"
          @openForm="openEditFormRow"
          @deleteRow="deleteRow"
        >
          <template v-for="(_, name) in viewRowSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </dt-view-row>

        <!-- Expanded row -->
        <dt-expanded-row :tableProps="props">
          <template v-for="(_, name) in expandedRowSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </dt-expanded-row>
      </template>

      <template v-slot:item="props">
        <dt-view-card
          :selectable="selectable"
          :tableProps="props"
          @openForm="openEditFormRow"
          @deleteRow="deleteRow"
        >
          <template v-for="(_, name) in viewRowSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </dt-view-card>
      </template>

      <template v-for="(_, name) in qTableSlots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </q-table>

    <dt-form-dialog :value="false" />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import { QTable } from 'quasar';

import DtViewRow from './Components/Rows/DtViewRow.vue';
import DtViewCard from './Components/Rows/DtViewCard.vue';
import DtFormRow from './Components/Rows/DtFormRow.vue';
import DtExpandedRow from './Components/Rows/DtExpandedRow.vue';

import DtFormDialog from './Components/Dialogs/DtFormDialog.vue';

import { DtSlotNamespacesMixin } from './Behavior/SlotNamespaces/DtSlotNamespacesMixin';
import { DtFormManagementMixin } from './Behavior/FormManagement/DtFormManagementMixin';

@Component({
  components: {
    QTable,
    DtViewRow,
    DtViewCard,
    DtFormRow,
    DtFormDialog,
    DtExpandedRow
  },
  inheritAttrs: false
})
export default class QDataTable extends Mixins(
  DtSlotNamespacesMixin,
  DtFormManagementMixin
) {
  @Prop({ default: 'id' }) rowKey!:
    | string
    | ((row: Record<string, any>) => any);
  @Prop() grid: boolean | undefined;
  @Prop() selected: any[] | undefined;

  get selectable() {
    return this.selected !== undefined;
  }

  submitNewRow(data: Record<string, unknown>) {
    console.log('submitNew', data);
    this.$emit('submitNew', data);
  }

  submitEditRow(data: Record<string, unknown>) {
    console.log('submitEdit', data);
    this.$emit('submitEdit', data);
  }

  deleteRow(data: Record<string, unknown>) {
    console.log('deleteRow', data);
    this.$emit('deleteRow', data);
  }
}
</script>
