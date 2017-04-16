import Ember from 'ember';
import EducationValidations from '../../../validations/education';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  EducationValidations,
});
