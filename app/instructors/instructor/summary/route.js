import Base from '../../../routes/instructor-base';

export default Base.extend({
  setupController(controller, model) {
    this._super(...arguments);

    controller.set('listItems', [
      { text: 'Addresses', icon: 'marker', count: controller.get('model.addresses.length') },
      { text: 'Courses', icon: 'student', count: controller.get('model.courses.length') },
      { text: 'Education', icon: 'book', count: controller.get('model.education.length') },
      { text: 'Email Addresses', icon: 'send', count: controller.get('model.emails.length') },
      { text: 'Phone Numbers', icon: 'text telephone', count: controller.get('model.phones.length') },
      { text: 'Skills', icon: 'trophy', count: controller.get('model.skills.length') },
      { text: 'Evaluations', icon: 'tasks', count: controller.get('model.evaluations.length') },
    ]);
  }
});
