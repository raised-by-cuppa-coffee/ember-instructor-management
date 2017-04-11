import DS from 'ember-data';
import { hasMany, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  firstName: attr('string'),
  middleName: attr('string'),
  lastName: attr('string'),
  createdAt: attr('date'),
  addresses: hasMany('address'),
  phones: hasMany('phone'),
  emails: hasMany('email'),
  skills: hasMany('skill'),
  courses: hasMany('course'),
  evaluations: hasMany('evaluation'),
  education: hasMany('education'),
});
