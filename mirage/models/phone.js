import DS from 'ember-data';
import { belongsTo, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  phone: attr('string'),
  type: attr('string'),
  extension: attr('string'),
  instructor: belongsTo('instructor'),
});
