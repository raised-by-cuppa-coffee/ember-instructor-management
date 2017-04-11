import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['ui', 'basic', 'buttons'],

  activePage: 1,
  totalPages: 0,

  paginateButtons: computed('activePage', 'totalPages', function() {
    // Grab the active page and total pages
    let totalPages = this.get('totalPages');
    let centerIndex = this.get('activePage') - 1;

    // Calculate left and right bounds, if either side doesn't reach full length
    // try to apply extras to the opposite side
    let leftIndex = (centerIndex - 5) > 0 ? centerIndex - 5 : 0;
    let rightIndex = (centerIndex + 5) <= totalPages - 1 ? centerIndex + 5 : totalPages - 1;
    let extraLeft = rightIndex === totalPages - 1 ? ((centerIndex + 5) - (totalPages - 1)) : 0;
    let extraRight = leftIndex === 0 ? Math.abs(centerIndex - 5) : 0;

    // Apply extra pages to either side if there's room
    leftIndex = leftIndex - extraLeft >= 0 ? leftIndex - extraLeft : 0;
    rightIndex = rightIndex + extraRight <= totalPages ? rightIndex + extraRight : totalPages;

    // Return an array starting at the left bound and ending at the right
    let arrayLength = (rightIndex - leftIndex) + 1 >= 11 ? 11 : (rightIndex - leftIndex) + 1;
    let buttonArray = [];
    let n = 0;

    while (n <= arrayLength - 1) {
      let val = n + leftIndex + 1;

      if (val <= totalPages) {
        buttonArray = buttonArray.concat([val]);
      }

      n += 1;
    }

    return buttonArray;
  }),

  actions: {
    activatePage(page) {
      this.get('onPaginate')(page);
    },
    nextPage() {
      if (this.get('activePage') + 1 <= this.get('totalPages')) {
        this.send('activatePage', this.get('activePage') + 1);
      }
    },
    prevPage() {
      if (this.get('activePage') - 1 >= 1) {
        this.send('activatePage', this.get('activePage') - 1);
      }
    }
  }
});
