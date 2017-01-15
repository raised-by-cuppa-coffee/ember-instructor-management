import DS from 'ember-data';
import { belongsTo, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  name: attr('string'),
  level: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),
  classSize: attr('number'),
  instructor: belongsTo('instructor'),
});
