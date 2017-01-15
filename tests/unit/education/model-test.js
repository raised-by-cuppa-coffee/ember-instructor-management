import { moduleForModel, test } from 'ember-qunit';

moduleForModel('education', 'Unit | Model | education', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it exists', function run(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
