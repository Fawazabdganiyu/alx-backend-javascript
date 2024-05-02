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

  describe('GET /cart/:id', () => {
    it('should respond with correct status code and message', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
    it('should respond with 404 status code', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should respond with correct status code and message', (done) => {
      request('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          "payment_methods": {
            "credit_cards": true,
            "paypal": false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should respond with correct status code and message', (done) => {
      request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
