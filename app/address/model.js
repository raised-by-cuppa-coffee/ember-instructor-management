import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  address: attr('string'),
  address_secondary: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  instructor: belongsTo('instructor', {
    async: true,
    inverse: 'addresses',
  }),
});
