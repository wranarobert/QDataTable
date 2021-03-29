import { Vue, Component, Prop } from 'vue-property-decorator';

const addFormKey = '__create';

@Component
export class DtFormManagementMixin extends Vue {
  @Prop({ default: 'id' }) rowKey!:
    | string
    | ((row: Record<string, any>) => any);

  formRows: Record<string, any> = {};

  get isAddFormRow() {
    return addFormKey in this.formRows;
  }

  rowKeyValue(formData: Record<string, any>): any {
    console.log(this.rowKey, typeof this.rowKey);
    if (typeof this.rowKey === 'function') {
      return this.rowKey(formData);
    }

    return formData[this.rowKey];
  }

  isEditFormRow(formData: Record<string, any>) {
    const rowKeyValue = this.rowKeyValue(formData);

    return rowKeyValue in this.formRows;
  }

  getNewFormData() {
    const rowKeyValue = addFormKey;

    return this.formRows[rowKeyValue];
  }

  getEditFormData(formData: Record<string, any>) {
    const rowKeyValue = this.rowKeyValue(formData);

    return this.formRows[rowKeyValue];
  }

  openNewFormRow(formData: Record<string, any>) {
    const rowKeyValue = addFormKey;

    this._createFormRow(rowKeyValue, formData);
  }

  openEditFormRow(formData: Record<string, any>) {
    const rowKeyValue = this.rowKeyValue(formData);

    console.log('rowKeyValue', rowKeyValue);

    this._createFormRow(rowKeyValue, formData);
  }

  updateNewFormRow(formData: Record<string, any>) {
    const rowKeyValue = addFormKey;

    this._editFormRow(rowKeyValue, formData);
  }

  updateEditFormRow(formData: Record<string, any>) {
    const rowKeyValue = this.rowKeyValue(formData);

    this._editFormRow(rowKeyValue, formData);
  }

  closeNewFormRow() {
    const rowKeyValue = addFormKey;

    this._deleteFormRow(rowKeyValue);
  }

  closeEditFormRow(formData: Record<string, any>) {
    const rowKeyValue = this.rowKeyValue(formData);

    this._deleteFormRow(rowKeyValue);
  }

  _createFormRow(rowKeyValue: string, formData: Record<string, any>) {
    if (this.formRows[rowKeyValue]) return;

    this.$set(this.formRows, rowKeyValue, formData);
  }

  _editFormRow(rowKeyValue: string, formData: Record<string, any>) {
    if (!this.formRows[rowKeyValue]) return;

    this.formRows[rowKeyValue] = formData;
  }

  _deleteFormRow(rowKeyValue: string) {
    if (!this.formRows[rowKeyValue]) return;

    this.$delete(this.formRows, rowKeyValue);
  }

  watchNewFormData(context: Record<string, any>) {
    this.$emit('watch:form', {
      ...context,
      isAddForm: true
    });
  }

  watchEditFormData(context: Record<string, any>) {
    this.$emit('watch:form', {
      ...context,
      isAddForm: false
    });
  }
}
