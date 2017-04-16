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
      { label: 'Addresses', link: 'addresses', count: model.get('addresses.length') },
      { label: 'Courses', link: 'courses', count: model.get('courses.length') },
      { label: 'Education', link: 'education', count: model.get('education.length') },
      { label: 'Email Addresses', link: 'emails', count: model.get('emails.length') },
      { label: 'Phone Numbers', link: 'phones', count: model.get('phones.length') },
      { label: 'Skills', link: 'skills', count: model.get('skills.length') },
      { label: 'Evaluations', link: 'evals', count: model.get('evaluations.length') },
    ])
  }
});
