import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.modelFor('instructors.instructor');
  },

  actions: {
    createNew(modelName) {
      this.controller.set('newItem', this.get('store').createRecord(modelName));
    },
    remove(model) {
      model.destroyRecord().catch(err => this.send('error', err));
    },
    save(model) {
      model.set('instructor', this.get('controller.model'));

      // After successful save, clean up the controller
      model.save().then(() => (
        this.controller.set('newItem', null))
      ).catch(err => this.send('error', err));
    }
  }
});
