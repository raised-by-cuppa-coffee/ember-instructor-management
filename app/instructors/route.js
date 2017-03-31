import Ember from 'ember';

const { $, Route } = Ember;

export default Route.extend({
  model(params) {
    return this.get('store').query('instructor', params);
  },

  actions: {
    closeModal(name) {
      $(`.ui.${name}.modal`).modal('hide');
    },
    openModal(name) {
      $(`.ui.${name}.modal`).modal('show');
    },
    createInstructor(data) {
      let model = this.get('store').createRecord('instructor', data);
      model.save();
      this.refresh();
    },
  },
});
