import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mfka-instructor-card', 'Integration | Component | mfka instructor card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mfka-instructor-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mfka-instructor-card}}
      template block text
    {{/mfka-instructor-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
