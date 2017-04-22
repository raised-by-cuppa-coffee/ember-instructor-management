import Ember from 'ember';
import paginationDefaults from '../../util/defaultPaginationParams';

const { computed, Controller } = Ember;

export default Controller.extend(paginationDefaults, {
  queryParams: Object.keys(paginationDefaults).concat(['q']),

  q: '',

  activePage: computed('skip', function() {
    return this.get('skip') / this.get('limit');
  }),
  totalPages: computed('model.meta.total', function() {
    return Math.ceil(this.get('model.meta.total') / this.get('limit'));
  })
});
