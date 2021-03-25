<template>
  <q-table
    v-bind="$attrs"
    :row-key="rowKey"
    dense
  >
    <template v-if="isAddFormRow" v-slot:top-row="props">
      <!-- Form add row -->
      <dt-form-row 
        key="addForm"
        :props="props" 
        :formData="getNewFormData()"
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
        :key="props.row[rowKey]"
        :props="props"
        :formData="getEditFormData(props.row)"
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
        :props="props"
        @openForm="openEditFormRow"
        @deleteRow="deleteRow"
      >
        <template v-for="(_, name) in viewRowSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </dt-view-row>

      <!-- Expanded view row -->
      <dt-expanded-view-row 
        v-if="props.expand"
        :props="props"
      >
        <template v-for="(_, name) in viewRowSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </dt-expanded-view-row>
    </template>

    <template v-for="(_, name) in qTableSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </q-table>
</template>

<script>
import SlotNamespaces from './Behavior/SlotNamespaces';
import FormManagement from './Behavior/FormManagement';

import DtViewRow from './Components/Rows/DtViewRow';
import DtExpandedViewRow from './Components/Rows/DtExpandedViewRow';
import DtFormRow from './Components/Rows/DtFormRow';

import { viewRowNamespace, formRowNamespace } from './Behavior/SlotNamespaces';

export default {
  props: {
    rowKey: {
      type: String,
      default: 'id'
    }
  },
  methods: {
    submitNewRow(formData) {
      console.log('submitNew', formData );
      this.$emit('submitNew', formData);
    },
    submitEditRow(formData) {
      console.log('submitEdit', formData);
      this.$emit('submitEdit', formData);
    },
    deleteRow(rowData) {
      console.log('deleteRow', rowData);
      this.$emit('deleteRow', rowData);
    },
  },
  provide: () => ({
    viewRowNamespace,
    formRowNamespace
  }),
  mixins: [SlotNamespaces, FormManagement],
  components: {
    DtViewRow,
    DtExpandedViewRow,
    DtFormRow
  },
  inheritAttrs: false,
}
</script>
