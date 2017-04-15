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
    save(newModel) {
      newModel.set('instructor', this.get('controller.model'));

      // After successful save, clean up the controller
      newModel.save().then(() => (
        this.controller.set('newItem', null))
      ).catch(err => this.send('error', err));
    }
  }
});
