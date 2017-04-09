import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  phone: attr('string'),
  type: attr('string'),
  extension: attr('string'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'phones',
  }),
});
