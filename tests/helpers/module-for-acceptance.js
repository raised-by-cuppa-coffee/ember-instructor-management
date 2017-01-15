import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach(...args) {
      this.application = startApp();

      return options.beforeEach ? options.beforeEach.apply(this, args) : undefined;
    },

    afterEach(...args) {
      const afterEach = options.afterEach && options.afterEach.apply(this, args);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    },
  });
}
