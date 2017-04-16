import { validateFormat, validatePresence } from 'ember-changeset-validations/validators';

export default {
  email: [
    validateFormat({ type: 'email' }),
    validatePresence(true),
  ]
};
