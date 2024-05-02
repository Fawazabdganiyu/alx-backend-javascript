const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should round +ve args with +ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should round -ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.4), -3);
    });
    it('should round -ve and +ve args with +ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });
  });

  describe('type SUBTRACT', function() {
    it('should round +ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should round -ve args with +ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -4.4), 6);
    });
    it('should round -ve and +ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });
  });

  describe('type DIVIDE', function() {
    it('should round +ve args with +ve result correctly', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should round -ve args with +ve result correctly', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, -4.4), -0.5);
    });
    it('should round -ve and +ve args with -ve result correctly', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });
    it('should return Error when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

});
