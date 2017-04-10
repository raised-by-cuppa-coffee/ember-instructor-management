import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cuppa-pagination-bar', 'Integration | Component | cuppa pagination bar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cuppa-pagination-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cuppa-pagination-bar}}
      template block text
    {{/cuppa-pagination-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
