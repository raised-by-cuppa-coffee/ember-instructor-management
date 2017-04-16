import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cuppa-removable-container', 'Integration | Component | cuppa removable container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cuppa-removable-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cuppa-removable-container}}
      template block text
    {{/cuppa-removable-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
