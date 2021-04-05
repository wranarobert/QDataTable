import { SlotNamespaceType } from '../../Enums/SlotNamespaceTypeEnum';

export class DtSlotNamespace {
  slotNamespace: SlotNamespaceType;

  constructor(slotNamespace: SlotNamespaceType) {
    this.slotNamespace = slotNamespace;
  }

  slot() {
    return this.slotNamespace;
  }

  slotName(slotName: string) {
    return `${this.slotNamespace}-${slotName}`;
  }

  slotNamePrepend(slotName: string) {
    return `${this.slotNamespace}-${slotName}-prepend`;
  }

  slotNameAppend(slotName: string) {
    return `${this.slotNamespace}-${slotName}-append`;
  }
}

export const ViewRowSlotNamespace = new DtSlotNamespace(
  SlotNamespaceType.ViewRow
);

export const ViewCardSlotNamespace = new DtSlotNamespace(
  SlotNamespaceType.ViewCard
);

export const FormRowSlotNamespace = new DtSlotNamespace(
  SlotNamespaceType.FormRow
);

export const ExpandedRowSlotNamespace = new DtSlotNamespace(
  SlotNamespaceType.ExpandedRow
);
