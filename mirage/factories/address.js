import { faker, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  address() {
    return faker.address.streetAddress();
  },
  address_secondary() {
    return faker.address.secondaryAddress();
  },
  city() {
    return faker.address.city();
  },
  state() {
    return faker.address.stateAbbr();
  },
  zip() {
    return faker.address.zipCode();
  },
});
