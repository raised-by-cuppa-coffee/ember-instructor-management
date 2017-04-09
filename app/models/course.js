import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  name: attr('string'),
  level: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),
  classSize: attr('number'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'courses',
  }),
  evaluation: belongsTo('evaluation', {
    async: true,
    inverse: 'course',
  }),
});
