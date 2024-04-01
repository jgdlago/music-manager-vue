import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate';
import { required } from '@vee-validate/rules';
export default {
  install(app) {
    app.component('VeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
  },
};
