import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    skip: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('instructor', params);
  },
});
