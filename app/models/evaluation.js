import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  grade: attr('string'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'evaluations',
  }),
  course: belongsTo('course', {
    async: true,
    inverse: 'evaluation',
  }),
});
