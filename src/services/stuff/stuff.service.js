// Initializes the `stuff` service on path `/stuff`
const createService = require('feathers-nedb');
const createModel = require('../../models/stuff.model');
const hooks = require('./stuff.hooks');
const filters = require('./stuff.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'stuff',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stuff', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('stuff');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
