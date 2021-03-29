<template>
  <q-tr :props="tableProps">
    <q-td v-if="selectable" auto-width>
      <q-checkbox :dense="tableProps.dense" v-model="tableProps.selected" />
    </q-td>
    <q-td
      v-for="column in tableProps.cols"
      :key="column.name"
      :props="tableProps"
    >
      <template v-if="column.name === 'actions'">
        <slot
          :name="ViewRowNamespace.slotNamePrepend(column.name)"
          v-bind="tableProps"
        />
        <slot
          :name="ViewRowNamespace.slotName(column.name)"
          v-bind="tableProps"
        >
          <q-btn
            v-if="!column.edit || (column.edit && column.edit.show)"
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
        </slot>
        <slot
          :name="ViewRowNamespace.slotNameAppend(column.name)"
          v-bind="tableProps"
        />
      </template>
      <template v-else>
        <slot
          v-if="!hasCellSlot"
          :name="ViewRowNamespace.slotName(column.name)"
          v-bind="tableProps"
        >
          {{ column.value }}
        </slot>
        <slot
          v-else
          :name="ViewRowNamespace.slotName('cell')"
          v-bind="column"
        />
      </template>
    </q-td>
  </q-tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { QTr, QTd } from 'quasar';

import {
  DtSlotNamespace,
  ViewRowSlotNamespace
} from '../../Behavior/SlotNamespaces/DtSlotNamespace';

@Component({ components: { QTr, QTd } })
export default class DtViewRow extends Vue {
  @Prop({ default: false }) readonly selectable!: boolean;
  @Prop({ required: true }) readonly tableProps!: Record<string, any>;

  get hasCellSlot() {
    return Object.keys(this.$scopedSlots).some((slot: string) =>
      slot.endsWith('cell')
    );
  }

  get ViewRowNamespace(): DtSlotNamespace {
    return ViewRowSlotNamespace;
  }
}
</script>
