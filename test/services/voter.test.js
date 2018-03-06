const assert = require('assert');
const app = require('../../src/app');

describe('\'voter\' service', () => {
  it('registered the service', () => {
    const service = app.service('voter');

    assert.ok(service, 'Registered the service');
  });
});
