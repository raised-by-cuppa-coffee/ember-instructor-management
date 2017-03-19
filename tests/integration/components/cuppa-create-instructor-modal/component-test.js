import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cuppa-create-instructor-modal', 'Integration | Component | cuppa create instructor modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cuppa-create-instructor-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cuppa-create-instructor-modal}}
      template block text
    {{/cuppa-create-instructor-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
