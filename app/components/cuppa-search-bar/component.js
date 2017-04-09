import Ember from 'ember';

const { run, Component } = Ember;

export default Component.extend({
  classNames: ['ui huge fluid icon input'],
  classNameBindings: ['isSearching:loading'],

  isSearching: false,
  q: '',

  keyUp(e) {
    let q = this.get('q');
    if (q.length > 3) {
      run.debounce(this, this._search, 1000);
    } else if (q.length === 0) {
      run.debounce(this, this._search, 150, true);
    }
  },
  
  _search() {
    this.set('isSearching', true);
    this.get('onSearch')(this.get('q')).then(() => this.set('isSearching', false));
  }
});
