import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  grade: validatePresence(true),
};
