import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  address: validatePresence(true),
  city: validatePresence(true),
  state: validatePresence(true),
  zip: validatePresence(true)
};
