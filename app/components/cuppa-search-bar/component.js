import Ember from 'ember';

const { run, Component } = Ember;

export default Component.extend({
  classNames: ['ui huge fluid icon input'],
  classNameBindings: ['isSearching:loading'],

  _debounceTimer: null,
  isSearching: false,
  q: '',

  keyUp(e) {
    let q = this.get('q');

    // If query length is over 3, search when user stops typing
    if (q.length > 3) {
      this.set('_debounceTimer', run.debounce(this, this._search, 1000));
    } else if (q.length === 0) {
      // If query is empty, immediately search for all
      run.cancel(this.get('_debounceTimer'));
      this._search();
    }
  },
  keyPress(e) {
    let { keyCode } = e;

    // If enter key is hit, query immediately
    if (keyCode === 13) {
      run.cancel(this.get('_debounceTimer'));
      this._search();
    }
  },
  
  _search() {
    this.set('isSearching', true);
    this.get('onSearch')(this.get('q')).finally(() => {
      this.set('isSearching', false)
    });
  }
});
