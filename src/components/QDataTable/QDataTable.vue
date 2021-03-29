<template>
  <div>
    <q-table
      :row-key="rowKey"
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
      </template>

      <!-- View card TODO -->
      <template v-slot:item="props">
        <div
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <q-card-actions class="q-px-md">
              <q-checkbox v-if="selectable" dense v-model="props.selected" />
              <q-space />
              <q-btn round size="sm" icon="edit" dense />
              <q-btn round size="sm" color="negative" icon="delete" dense />
            </q-card-actions>
            <q-separator />
            <q-card-section class="q-pa-xs">
              <q-list dense>
                <q-item
                  v-for="col in props.cols.filter(
                    ({ name }) => name !== 'actions'
                  )"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </template>

      <template v-for="(_, name) in qTableSlots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </q-table>

    <!--
    <q-dialog :value="isAddFormRow" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense autofocus />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    -->
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import { QTable } from 'quasar';

import DtViewRow from './Components/Rows/DtViewRow.vue';
import DtFormRow from './Components/Rows/DtFormRow.vue';

import { DtSlotNamespacesMixin } from './Behavior/SlotNamespaces/DtSlotNamespacesMixin';
import { DtFormManagementMixin } from './Behavior/FormManagement/DtFormManagementMixin';

@Component({
  components: { QTable, DtViewRow, DtFormRow },
  inheritAttrs: false
})
export default class QDataTable extends Mixins(
  DtSlotNamespacesMixin,
  DtFormManagementMixin
) {
  @Prop({ default: 'id' }) rowKey!:
    | string
    | ((row: Record<string, any>) => any);

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
