import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  type: attr('string'),
  institution: attr('string'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'education',
  }),
});
