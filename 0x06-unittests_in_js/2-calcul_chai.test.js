const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should round +ve args with +ve result correctly', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should round -ve args with -ve result correctly', function() {
      expect(calculateNumber('SUM', -1.4, -4.)).to.equal(-5);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      expect(calculateNumber('SUM', 1.4, -4.4)).to.equal(-3);
    });
    it('should round -ve and +ve args with +ve result correctly', function() {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
  });

  describe('type SUBTRACT', function() {
    it('should round +ve args with -ve result correctly', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should round -ve args with +ve result correctly', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      expect(calculateNumber('SUBTRACT', 1.5, -4.4)).to.equal(6);
    });
    it('should round -ve and +ve args with -ve result correctly', function() {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });
  });

  describe('type DIVIDE', function() {
    it('should round +ve args with +ve result correctly', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should round -ve args with +ve result correctly', function() {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });
    it('should round a +ve and a -ve args with -ve result correctly', function() {
      expect(calculateNumber('DIVIDE', 1.5, -4.4)).to.equal(-0.5);
    });
    it('should round -ve and +ve args with -ve result correctly', function() {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });
    it('should return Error when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

});
