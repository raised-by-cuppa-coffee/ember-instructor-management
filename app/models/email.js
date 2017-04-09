import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  email: attr('string'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'emails',
  }),
});
