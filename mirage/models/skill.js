import DS from 'ember-data';
import { belongsTo, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  name: attr('string'),
  instructor: belongsTo('instructor'),
});
