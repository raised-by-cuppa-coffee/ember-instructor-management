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
    this.route('search');
    this.route('instructor', { path: '/:instructor_id'}, function() {
      this.route('summary');
      this.route('addresses');
      this.route('courses');
      this.route('education');
      this.route('emails');
      this.route('evals');
      this.route('phones');
      this.route('skills');
    });
  });
  this.route('instructor-base');
});

export default Router;
