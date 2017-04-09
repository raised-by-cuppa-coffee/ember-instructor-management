import Ember from 'ember';

const { $, Route } = Ember;

export default Route.extend({
  model(params) {
    console.log(params);
    return this.get('store').query('instructor', params);
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('newInstructor', this.get('store').createRecord('instructor', {}));
  },

  actions: {
    closeModal(name) {
      $(`.ui.${name}.modal`).modal('hide');
    },
    openModal(name) {
      $(`.ui.${name}.modal`).modal('show');
    },
    createInstructor(model) {
      model.save()
        .then(() => this.controller.set('newInstructor', this.get('store').createRecord('instructor', {})))
        .then(() => this.refresh())
        .catch(alert);
    },
  },
});
