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
  },

  afterCreate(instructor, server) {
    server.createList('address', 2, { instructor });
    server.createList('course', 5, { instructor });
    server.createList('education', 2, { instructor });
    server.createList('email', 3, { instructor });
    server.createList('phone', 3, { instructor });
    server.createList('skill', 4, { instructor });
  }
});
