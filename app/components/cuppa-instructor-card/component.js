import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['ui', 'card'],

  firstName: '',
  lastName: '',
  middleName: ''
});