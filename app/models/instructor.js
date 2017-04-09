import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  firstName: attr('string'),
  middleName: attr('string'),
  lastName: attr('string'),
  createdAt: attr('date'),
  addresses: hasMany('address', {
    async: true,
    inverse: 'instructor',
  }),
  phones: hasMany('phone', {
    async: true,
    inverse: 'instructor',
  }),
  emails: hasMany('email', {
    async: true,
    inverse: 'instructor',
  }),
  skills: hasMany('skill', {
    async: true,
    inverse: 'instructor',
  }),
  courses: hasMany('course', {
    async: true,
    inverse: 'instructor',
  }),
  evaluations: hasMany('evaluation', {
    async: true,
    inverse: 'instructor',
  }),
  education: hasMany('education', {
    async: true,
    inverse: 'instructor',
  }),
});
