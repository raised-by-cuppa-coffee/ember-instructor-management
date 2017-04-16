import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  name: validatePresence(true),
  level: validatePresence(true),
  startDate: validatePresence(true),
  endDate: validatePresence(true),
  classSize: validatePresence(true),
};
