import Ember from 'ember';
import AddressValidations from '../../../validations/address';
import { usStates } from '../../../util/lookup';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,
  usStates,
  AddressValidations,
});
