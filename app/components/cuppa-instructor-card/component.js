import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['ui', 'fluid', 'card'],

  firstName: '',
  lastName: '',
  middleName: '',

  click(e) {
    e.preventDefault();
    this.get('onClick')();
  }
});
