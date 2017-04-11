export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.get('/addresses');

  this.get('/courses');

  this.get('/education');

  this.get('/emails');

  this.get('/evaluations');

  this.get('/instructors/:id')
  this.get('/instructors', function({ instructors }, { queryParams }) {
    let results = instructors.all();
    let { q, limit, skip } = queryParams;

    if (q && q !== '*') {
      results = results.filter((model) => (
        q.split(' ').any(function(word) {
          if (model.firstName === word || model.middleName === word || model.lastName === word) {
            return true;
          }
        })
      ));
    }

    results.meta = { total: results.models.length };
    results.models = results.models.slice(parseInt(skip, 10), parseInt(limit, 10) + parseInt(skip, 10));

    return results;
  });
  this.post('/instructors', function({ instructors }) {
    let attrs = this.normalizedRequestAttrs();
    attrs.createdAt = new Date();

    return instructors.create(attrs);
  });

  this.get('/phones');

  this.get('/skills');

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
