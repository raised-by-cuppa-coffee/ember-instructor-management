import { faker, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  middleName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  createdAt() {
    return faker.date.recent(5);
  }
});
