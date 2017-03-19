import Ember from 'ember';

const { $, Route } = Ember;

export default Route.extend({
  actions: {
    closeModal(name) {
      $(`.ui.${name}.modal`).modal('hide');
    },
    openModal(name) {
      $(`.ui.${name}.modal`).modal('show');
    },
  },
});
