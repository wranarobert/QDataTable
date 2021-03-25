export const slotNamespaces = Object.freeze({
  viewRow: 'view-row',
  formRow: 'form-row'
});

export default {
  computed: {
      viewRowSlotNames () {
        return Object
          .keys(this.$scopedSlots)
          .filter(slotName => slotName.startsWith(slotNamespaces.viewRow));
      },
      formRowSlotNames () {
        return Object
          .keys(this.$scopedSlots)
          .filter(slotName => slotName.startsWith(slotNamespaces.formRow));
      },
      qTableSlotNames () {
        return Object
          .keys(this.$scopedSlots)
          .filter(slotName => 
            !this.viewRowSlotNames.includes(slotName) && 
            !this.formRowSlotNames.includes(slotName)
          );
      },
      viewRowSlots () {
        return this.viewRowSlotNames
          .reduce((slotObject, slotName) => {
              slotObject[slotName] = this.$scopedSlots[slotName];
              return slotObject;
          }, {});
      },
      formRowSlots () {
        return this.formRowSlotNames
          .reduce((slotObject, slotName) => {
            slotObject[slotName] = this.$scopedSlots[slotName];
            return slotObject;
          }, {});
      },
      qTableSlots () {
        return this.qTableSlotNames
          .reduce((slotObject, slotName) => {
            slotObject[slotName] = this.$scopedSlots[slotName];
            return slotObject;
          }, {});
      },
    },
};

class SlotNamespaceService {
  constructor(slotNamespace) {
    this.namespace = slotNamespace;
  }

  createSlot(slotName){
    return `${this.namespace}-${slotName}`;
  }
};

export const viewRowNamespace = new SlotNamespaceService(slotNamespaces.viewRow);
export const formRowNamespace = new SlotNamespaceService(slotNamespaces.formRow);