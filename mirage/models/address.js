import DS from 'ember-data';
import { belongsTo, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  address: attr('string'),
  address_secondary: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  instructor: belongsTo('instructor'),
});
