import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  type: validatePresence(true),
  institution: validatePresence(true),
};
