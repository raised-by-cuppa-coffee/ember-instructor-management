import Ember from 'ember';
import AddressValidations from '../../../validations/address';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  AddressValidations,
});
