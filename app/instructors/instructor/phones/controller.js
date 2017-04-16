import Ember from 'ember';
import PhoneValidations from '../../../validations/phone';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  PhoneValidations,
});
