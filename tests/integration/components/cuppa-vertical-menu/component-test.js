import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cuppa-vertical-menu', 'Integration | Component | cuppa vertical menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cuppa-vertical-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cuppa-vertical-menu}}
      template block text
    {{/cuppa-vertical-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
