import { faker, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.jobArea();
  },
  level() {
    return faker.random.number(5);
  },
  startDate() {
    let from = new Date('2016-01-10');
    let to = new Date('2016-01-21');

    return faker.date.between(from, to);
  },
  endDate() {
    let from = new Date('2016-06-10');
    let to = new Date('2016-06-30');

    return faker.date.between(from, to);
  },
  classSize() {
    return faker.random.number(10, 50);
  },
});
