import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  firstName: validatePresence(true),
  lastName: validatePresence(true),
  middleName: validatePresence(true),
};
