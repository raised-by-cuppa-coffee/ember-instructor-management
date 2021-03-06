import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('instructor', params.instructor_id);
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('navItems', [
      { label: 'Summary', link: 'summary', icon: 'user' },
      { label: 'Addresses', link: 'addresses' },
      { label: 'Courses', link: 'courses' },
      { label: 'Education', link: 'education' },
      { label: 'Email Addresses', link: 'emails' },
      { label: 'Phone Numbers', link: 'phones' },
      { label: 'Skills', link: 'skills' },
      { label: 'Evaluations', link: 'evaluations' },
    ])
  }
});
