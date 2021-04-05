<template>
  <div
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    :style="tableProps.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card :class="tableProps.selected ? 'bg-grey-2' : ''">
      <q-card-actions class="bg-grey-3 q-px-md">
        <q-checkbox v-if="selectable" dense v-model="tableProps.selected" />
        <q-space />
        <q-btn
          round
          size="sm"
          icon="edit"
          dense
          @click="$emit('openForm', tableProps.row)"
        />
        <q-btn
          round
          size="sm"
          color="negative"
          icon="delete"
          dense
          @click="$emit('deleteRow', tableProps.row)"
        />
      </q-card-actions>
      <q-separator />
      <q-card-section class="q-pa-xs">
        <q-list dense>
          <q-item v-for="col in dataColumns(tableProps)" :key="col.name">
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import {
  DtSlotNamespace,
  ViewCardSlotNamespace
} from '../../Behavior/SlotNamespaces/DtSlotNamespace';

@Component
export default class DtViewCard extends Vue {
  @Prop({ default: false }) readonly selectable!: boolean;
  @Prop({ required: true }) readonly tableProps!: Record<string, any>;

  get ViewCardNamespace(): DtSlotNamespace {
    return ViewCardSlotNamespace;
  }

  dataColumns(tableProps: Record<string, any>) {
    return tableProps.cols.filter(
      (column: Record<string, any>) =>
        column.name !== 'actions' && column.name !== 'expand'
    );
  }
}
</script>
