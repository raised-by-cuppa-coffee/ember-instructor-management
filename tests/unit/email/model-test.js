import { moduleForModel, test } from 'ember-qunit';

moduleForModel('email', 'Unit | Model | email', {
  // Specify the other units that are required for this test.
  needs: ['model:instructor'],
});

test('it exists', function run(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
