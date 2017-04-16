import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  phone: validatePresence(true),
  type: validatePresence(true),
};
