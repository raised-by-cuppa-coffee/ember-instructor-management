import { validateNumber, validatePresence } from 'ember-changeset-validations/validators';

export default {
  name: validatePresence(true),
  level: [
    validateNumber({ integer: true, positive: true }),
    validatePresence(true)
  ],
  startDate: validatePresence(true),
  classSize: [
    validateNumber({ integer: true, positive: true }),
    validatePresence(true)
  ]
};
