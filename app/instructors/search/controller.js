import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
  queryParams: ['q', 'limit', 'skip'],

  q: '',
  limit: 9,
  skip: 0,
  page: 1,
  activePage: 1,

  totalPages: computed('limit', 'model.meta.total', function() {
    return Math.floor(this.get('model.meta.total') / this.get('limit'));
  })
});
