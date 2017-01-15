import { moduleForModel, test } from 'ember-qunit';

moduleForModel('evaluation', 'Unit | Model | evaluation', {
  // Specify the other units that are required for this test.
  needs: [
    'model:course',
    'model:instructor',
  ],
});

test('it exists', function run(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
