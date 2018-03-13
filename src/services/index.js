const vote = require('./vote/vote.service.js');
const voter = require('./voter/voter.service.js');
const topic = require('./topic/topic.service.js');

module.exports = function (app) {
  app.configure(vote);
  app.configure(voter);
  app.configure(topic);
};
