import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
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
