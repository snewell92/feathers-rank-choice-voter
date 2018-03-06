// Initializes the `vote` service on path `/vote`
const createService = require('./vote.class.js');
const hooks = require('./vote.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'vote',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/vote', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('vote');

  service.hooks(hooks);
};
