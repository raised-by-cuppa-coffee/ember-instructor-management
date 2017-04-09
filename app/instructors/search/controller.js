import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'limit', 'skip'],
  q: '',
  limit: 12,
  skip: 0
});
