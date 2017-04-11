import Ember from 'ember';

const { computed, Component } = Ember;
const { notEmpty } = computed;

export default Component.extend({
  classNames: ['ui', 'form'],
  classNameBindings: ['hasErrors:error'],
  tagName: 'form',

  errors: computed('changeset.errors.[]', function() {
    return this.get('changeset.errors');
  }),
  hasErrors: notEmpty('errors'),

  actions: {
    submit() {
      // Force validation of entire form
      this.get('changeset').validate();

      if (this.get('changeset.isValid')) {
        this.get('onSubmit')(this.get('changeset'));
      }
    },
  },
});
