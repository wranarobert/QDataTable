import Vue from 'vue';

const addFormKey = "__create";

export default {
  data: () => ({
    formRows: {},
  }),
  computed: {
    isAddFormRow() {
      return addFormKey in this.formRows;
    },
  },
  methods: {
    isEditFormRow(formData) {
      const rowKeyValue = formData[this.rowKey];
      return rowKeyValue in this.formRows;
    },
    getNewFormData() {
      return this.formRows[addFormKey];
    },
    getEditFormData(formData) {
      const rowKeyValue = formData[this.rowKey];

      return this.formRows[rowKeyValue];
    },
    _createFormRow(rowKeyValue, formData) {
      if(this.formRows[rowKeyValue]) return;

      Vue.set(this.formRows, rowKeyValue, formData);
    },
    _editFormRow(rowKeyValue, formData) {
      if(!this.formRows[rowKeyValue]) return;

      this.formRows[rowKeyValue] = formData;
    },
    _deleteFormRow(rowKeyValue) {
      if(!this.formRows[rowKeyValue]) return;

      Vue.delete(this.formRows, rowKeyValue);
    },
    openNewFormRow(formData) {
      const rowKeyValue = addFormKey;

      this._createFormRow(rowKeyValue, formData);
    },
    openEditFormRow(formData) {
      const rowKeyValue = formData[this.rowKey];

      this._createFormRow(rowKeyValue, formData);
    },
    updateNewFormRow(formData) {
      const rowKeyValue = addFormKey;

      this._editFormRow(rowKeyValue, formData);
    },
    updateEditFormRow(formData) {
      const rowKeyValue = formData[this.rowKey];

      this._editFormRow(rowKeyValue, formData);
    },
    closeNewFormRow() {
      const rowKeyValue = addFormKey;

      this._deleteFormRow(rowKeyValue);
    },
    closeEditFormRow(formData) {
      const rowKeyValue = formData[this.rowKey];

      this._deleteFormRow(rowKeyValue);
    },
    watchNewFormData(context) {
      this.$emit('watch:form', {
        ...context,
        isAdding: true
      });
    },
    watchEditFormData(context) {
      this.$emit('watch:form', {
        ...context,
        isAdding: false
      });
    }
  },
};