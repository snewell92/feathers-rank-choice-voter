// Initializes the `voter` service on path `/voter`
const createService = require('feathers-nedb');
const createModel = require('../../models/voter.model');
const hooks = require('./voter.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'voter',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/voter', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('voter');

  service.hooks(hooks);
};
