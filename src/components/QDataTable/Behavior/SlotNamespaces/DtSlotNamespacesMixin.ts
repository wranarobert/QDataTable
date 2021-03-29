import { Vue, Component } from 'vue-property-decorator';

import { SlotNamespaceType } from '../../Enums/SlotNamespaceTypeEnum';

@Component
export class DtSlotNamespacesMixin extends Vue {
  get viewRowSlotNames() {
    return Object.keys(this.$scopedSlots).filter(slotName =>
      slotName.startsWith(SlotNamespaceType.ViewRow)
    );
  }
  get formRowSlotNames() {
    return Object.keys(this.$scopedSlots).filter(slotName =>
      slotName.startsWith(SlotNamespaceType.FormRow)
    );
  }
  get qTableSlotNames() {
    return Object.keys(this.$scopedSlots).filter(
      slotName =>
        !this.viewRowSlotNames.includes(slotName) &&
        !this.formRowSlotNames.includes(slotName)
    );
  }
  get viewRowSlots() {
    return this.viewRowSlotNames.reduce((slotObject, slotName) => {
      slotObject[slotName] = this.$scopedSlots[slotName];
      return slotObject;
    }, <Record<string, unknown>>{});
  }
  get formRowSlots() {
    return this.formRowSlotNames.reduce((slotObject, slotName) => {
      slotObject[slotName] = this.$scopedSlots[slotName];
      return slotObject;
    }, <Record<string, unknown>>{});
  }
  get qTableSlots() {
    return this.qTableSlotNames.reduce((slotObject, slotName) => {
      slotObject[slotName] = this.$scopedSlots[slotName];
      return slotObject;
    }, <Record<string, unknown>>{});
  }
}
