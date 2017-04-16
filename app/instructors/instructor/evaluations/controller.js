import Ember from 'ember';
import EvalValidations from '../../../validations/evaluation';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  EvalValidations,
});
