import Ember from 'ember';
import Base from '../../../routes/instructor-base';

const { Route } = Ember;

export default Base.extend({
  setupController(controller, model) {
    this._super(...arguments);

    controller.set('listItems', [
      { text: 'Addresses', icon: 'marker', count: model.get('addresses').length },
      { text: 'Courses', icon: 'student', count: model.get('courses').length },
      { text: 'Education', icon: 'book', count: model.get('education').length },
      { text: 'Email Addresses', icon: 'send', count: model.get('emails').length },
      { text: 'Evaluations', icon: 'tasks', count: model.get('evaluations').length },
      { text: 'Phone Numbers', icon: 'text telephone', count: model.get('phones').length },
      { text: 'Skills', icon: 'trophy', count: model.get('skills').length },
    ]);
  }
});
