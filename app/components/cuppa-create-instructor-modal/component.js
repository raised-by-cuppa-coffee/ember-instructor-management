import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  classNames: ['new-instructor'],
  name: 'new-instructor',

  actions: {
    create() {
      this.execute('hide');
    },
  },
});
