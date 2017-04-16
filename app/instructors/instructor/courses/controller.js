import Ember from 'ember';
import CourseValidations from '../../../validations/course';

const { Controller } = Ember;

export default Controller.extend({
  newItem: null,

  CourseValidations,

  actions: {
    setDate(changeset, field, value) {
      changeset.set(field, value);
    }
  }
});
