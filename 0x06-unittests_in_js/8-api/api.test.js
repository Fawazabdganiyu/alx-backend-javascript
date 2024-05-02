const { expect } = require('chai');
const request = require('request');

describe('API index page tests', () => {
  it('should respond with correct status code and welcome message', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
