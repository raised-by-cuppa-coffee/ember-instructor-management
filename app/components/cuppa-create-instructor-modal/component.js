import UiModal from 'semantic-ui-ember/components/ui-modal';
import InstructorValidations from '../../validations/instructor';

export default UiModal.extend({
  classNames: ['new-instructor'],
  name: 'new-instructor',

  InstructorValidations,

  actions: {
    create(instructor) {
      this.get('onSave')(instructor);
      this.execute('hide');
    },
  },
});
