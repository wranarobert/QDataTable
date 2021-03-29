import { Vue, Component } from 'vue-property-decorator';

@Component
export class DtInputsValidationMixin extends Vue {
  async validate(): Promise<any> {
    const validation = (<any>this.$refs.input).validate();

    if (validation instanceof Promise) {
      return validation.then(outcome => outcome || Promise.reject());
    }

    if (!validation) {
      return Promise.reject();
    }

    return Promise.resolve();
  }
}
