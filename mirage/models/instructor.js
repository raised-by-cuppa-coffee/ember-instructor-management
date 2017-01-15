import DS from 'ember-data';
import { hasMany, Model } from 'ember-cli-mirage';

const { attr } = DS;

export default Model.extend({
  firstName: attr('string'),
  middleName: attr('string'),
  lastName: attr('lastName'),
  phone: hasMany('phone'),
  email: hasMany('email'),
  skills: hasMany('skill'),
  courses: hasMany('course'),
  evaluation: hasMany('evaluation'),
  education: hasMany('education'),
});
