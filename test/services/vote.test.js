const assert = require('assert');
const app = require('../../src/app');

const votes = [
  ["blue","green","purple"],
  ["green","blue","purple"],
  ["purple","blue","green"]
];

describe('\'vote\' service', () => {
  it('registered the service', () => {
    const service = app.service('vote');

    assert.ok(service, 'Registered the service');
  });
});
