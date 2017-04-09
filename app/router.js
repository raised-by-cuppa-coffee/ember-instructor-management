/* eslint array-callback-return: 0 */
/* eslint func-names: 0 */
/* eslint prefer-arrow-callback: 0 */
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('instructors', function() {
    this.route('new');
  });
});

export default Router;
