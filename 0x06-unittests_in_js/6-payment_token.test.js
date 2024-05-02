const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', () => {
  it('should return a Promise with success message', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        const expected = {data: 'Successful response from the API' };

        expect(response).to.deep.equal(expected);
        done();
      })
  });
});
