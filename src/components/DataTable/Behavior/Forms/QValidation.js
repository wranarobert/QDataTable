export default {
  methods: {
    validate() {
      const validation = this.$refs.input.validate();

      if(validation instanceof Promise) {
        return validation.then(outcome => outcome || Promise.reject());
      }

      if(!validation) {
        return Promise.reject();
      }

      return Promise.resolve();
    }
  },
};