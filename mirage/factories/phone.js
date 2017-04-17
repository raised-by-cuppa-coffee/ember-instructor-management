import { faker, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  phone() {
    return faker.phone.phoneNumber();
  },
  type() {
    return faker.random.arrayElement(['Home', 'Mobile', 'Work', 'Car']);
  },
  extension() {
    return faker.random.number(999);
  },
});
