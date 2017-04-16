import { validateFormat, validateNumber, validatePresence } from 'ember-changeset-validations/validators';

export default {
  extension: validateNumber({ allowBlank: true, integer: true, positive: true }),
  phone: [
    validateFormat({ type: 'phone' }),
    validatePresence(true),
  ],
  type: validatePresence(true),
};
