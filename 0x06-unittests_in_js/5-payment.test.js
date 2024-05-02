const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should call with 100 and 20 correctly', () => {

    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should call with 10 and 10 correctly', () => {

    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
