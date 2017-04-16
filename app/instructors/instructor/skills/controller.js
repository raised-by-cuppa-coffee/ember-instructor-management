import Ember from 'ember';
import SkillValidations from '../../../validations/skill';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  SkillValidations,
});
