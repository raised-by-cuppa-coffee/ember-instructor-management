import { moduleForModel, test } from 'ember-qunit';

moduleForModel('instructor', 'Unit | Model | instructor', {
  // Specify the other units that are required for this test.
  needs: [
    'model:address',
    'model:course',
    'model:education',
    'model:email',
    'model:evaluation',
    'model:phone',
    'model:skill',
  ],
});

test('it exists', function run(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
