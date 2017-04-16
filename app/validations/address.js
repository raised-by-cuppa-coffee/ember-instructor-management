import { validateFormat, validateInclusion, validatePresence } from 'ember-changeset-validations/validators';
import { usStates } from '../util/lookup';

export default {
  address: validatePresence(true),
  city: validatePresence(true),
  state: [
    validateInclusion({ list: usStates.map(state => state.value) }),
    validatePresence(true)
  ],
  zip: [
    validateFormat({ regex: /^\d{5}(?:[-]\d{4})?$/ }),
    validatePresence(true)
  ]
};
