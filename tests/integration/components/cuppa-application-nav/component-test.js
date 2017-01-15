import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cuppa-application-nav', 'Integration | Component | cuppa application nav', {
  integration: true,
});

test('it renders', function render(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cuppa-application-nav}}`);

  assert.equal(this.$('a').length, 3);
});
