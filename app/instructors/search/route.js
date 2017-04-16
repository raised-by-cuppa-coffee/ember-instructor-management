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

  actions: {
    paginate(page) {
      this.transitionTo({
        queryParams: {
          limit: this.controller.get('limit'),
          skip: this.controller.get('limit') * page
        }
      }).then(() => this.controller.set('activePage', page));
    },
    viewFull(instructorId) {
      this.transitionTo('instructors.instructor', instructorId);
    }
  }
});
