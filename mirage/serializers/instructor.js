import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  serialize(object, request) {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    json.meta = {
      total: object.meta.total
    };

    return json;
  }
});
