const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber test', function() {
  it('should return normal sum', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return sum when one of the numbers rounded up', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return sum when one would be rounded up and other would be rounded down', function() {
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });
  it('should return sum when both would be rounded up', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return sum when both would be rounded down', function() {
    assert.strictEqual(calculateNumber(1.2, 4.3), 5);
  });
  it('should return sum for zero args', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return sum when both args are negative', function() {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('should return sum when both -ve are to be rounded up', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it('should return sum when one -ve is to be rounded up and other is to be rounded down', function() {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
  it('should return sum when one -ve is to be rounded up and other is to be rounded down', function() {
    assert.strictEqual(calculateNumber(-1.7, -3.2), -5);
  });
  it('should return sum when one is normal -ve and other is to be rounded up', function() {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });

  it('should return sum when one is -ve and other is +ve', function() {
    assert.strictEqual(calculateNumber(-1, 3), 2);
  });
  it('should return sum when one is -ve and other is +ve', function() {
    assert.strictEqual(calculateNumber(-5.2, 3.7), -1);
  });
  it('should return rounded sum when one is -ve and other is +ve', function() {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });

});
