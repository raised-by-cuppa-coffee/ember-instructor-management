import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('instructor', params.instructor_id);
  },
  setupController(controller) {
    this._super(...arguments);

    controller.set('navItems', [
      { label: 'Summary', link: 'summary' },
      { label: 'Addresses', link: 'addresses' },
      { label: 'Courses', link: 'courses' },
      { label: 'Education', link: 'education' },
      { label: 'Email Addresses', link: 'emails' },
      { label: 'Evaluations', link: 'evals' },
      { label: 'Phone Numbers', link: 'phones' },
      { label: 'Skills', link: 'skills' },
    ])
  }
});
