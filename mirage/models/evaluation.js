import DS from 'ember-data';
import { belongsTo, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  grade: attr('string'),
  instructor: belongsTo('instructor'),
  course: belongsTo('course'),
});
