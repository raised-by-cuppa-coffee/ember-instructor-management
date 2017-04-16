import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['ui', 'clearing', 'segment'],

  actions: {
    remove() {
      this.get('onRemove')();
    }
  }
});
