import { moduleForModel, test } from 'ember-qunit';

moduleForModel('instructor', 'Unit | Model | instructor', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it exists', function run(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
