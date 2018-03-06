const vote = require('./vote/vote.service.js');
const voter = require('./voter/voter.service.js');
const topic = require('./topic/topic.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(vote);
  app.configure(voter);
  app.configure(topic);
};
