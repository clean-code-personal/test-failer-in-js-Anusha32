const {expect} = require('chai');

let s = require('./tshirts') ;


// console.assert(expect(s.size(37)).equals('S'));
// expect(s.size(40)).equals('M');
// expect(s.size(43)).equals('L');
// console.assert(expect(s.size(38)).equals('S')); 

//Test cases using Mocha
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});