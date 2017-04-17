import { faker, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  type() {
    return faker.random.arrayElement(['Online', 'Public', 'State']);
  },
  institution() {
    return faker.lorem.words();
  },
});
