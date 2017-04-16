import Ember from 'ember';
import EmailValidations from '../../../validations/email';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  EmailValidations,
});
