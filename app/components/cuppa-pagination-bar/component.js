import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['ui buttons'],

  activePage: null,
  pageSize: null,
  totalItems: 0,

  paginateButtons: computed('activePage', 'totalPages', function() {
    // Grab the active page and total pages
    let totalPages = this.get('totalPages');
    let center = this.get('activePage');

    // Calculate left and right bounds, if either side doesn't reach full length
    // try to apply extras to the opposite side
    let left = (center - 5) >= 1 ? center - 5 : 1;
    let right = (center + 5) <= totalPages ? center + 5 : totalPages;
    let extraLeft = right === totalPages ? (center + 5) - totalPages : 0;
    let extraRight = left === 1 ? Math.abs(center - 5) : 0;

    // Apply extra pages to either side if there's room
    left = left - extraLeft >= 1 ? left + extraLeft : 1;
    right = right + extraRight <= totalPages ? right + extraRight : totalPages;

    // Return an array starting at the left bound and ending at the right
    let arrayLength = right - left === 0 ? 1 : right - left;
    let buttonArray = [];
    let n = 0;

    while (n <= arrayLength) {
      buttonArray = buttonArray.concat([n + left]);

      n += 1;
    }

    return buttonArray;
  }),
  totalPages: computed('pageSize', 'totalItems', function() {
    return Math.floor(this.get('totalItems') / this.get('pageSize'));
  }),

  actions: {
    activatePage(page) {
      this.set('activePage', page);
      this.get('onPaginate')(page);
    }
  }
});
