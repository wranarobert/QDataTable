<template>
  <q-tr :props="tableProps">
    <q-td colspan="100%">
      <slot :name="ExpandedRowNamespace.slotName('body')" v-bind="tableProps" />
    </q-td>
  </q-tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { QTr, QTd } from 'quasar';

import {
  DtSlotNamespace,
  ExpandedRowSlotNamespace
} from '../../Behavior/SlotNamespaces/DtSlotNamespace';

@Component({ components: { QTr, QTd } })
export default class DtExpandedRow extends Vue {
  @Prop({ required: true }) readonly tableProps!: Record<string, any>;

  get ExpandedRowNamespace(): DtSlotNamespace {
    return ExpandedRowSlotNamespace;
  }
}
</script>
