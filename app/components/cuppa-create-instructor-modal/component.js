import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  classNames: ['new-instructor'],
  name: 'new-instructor',

  data: {},

  actions: {
    create() {
      this.get('onCreate')(this.get('data'));
      this.execute('hide');
    },
  },
});
